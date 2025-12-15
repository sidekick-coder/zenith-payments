<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { loadMercadoPago } from '@mercadopago/sdk-js'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '#client/components/ui/card'
import Plan from '#zpayments/shared/entities/plan.entity.ts'

declare global {
    interface Window {
        MercadoPago: any
    }
}

const route = useRoute()
const planId = ref(route.query.plan_id as string)
const gatewayId = ref(route.query.gateway_id as string)
const publicKey = ref(route.query.public_key as string)

let mp: any = null
let cardForm: any = null
const isLoadingPlan = ref(false)
const isSubmitting = ref(false)
const error = ref<string | null>(null)
const plan = ref<Plan | null>(null)

async function loadPlan() {
    if (!planId.value) {
        error.value = $t('Plan ID is required')
        return
    }

    isLoadingPlan.value = true

    const [err, response] = await tryCatch(() => $fetch<Plan>(`/api/zpayments/plans/${planId.value}`))

    isLoadingPlan.value = false

    if (err) {
        error.value = $t('Failed to load plan details')
        return
    }

    plan.value = response
}

async function initializeCardForm() {
    if (!mp || !plan.value) {
        return
    }

    cardForm = mp.cardForm({
        amount: String(plan.value.amount / 100),
        iframe: true,
        form: {
            id: 'form-checkout',
            cardNumber: {
                id: 'form-checkout__cardNumber',
                placeholder: $t('Card Number'),
            },
            expirationDate: {
                id: 'form-checkout__expirationDate',
                placeholder: 'MM/YY',
            },
            securityCode: {
                id: 'form-checkout__securityCode',
                placeholder: $t('Security Code'),
            },
            cardholderName: {
                id: 'form-checkout__cardholderName',
                placeholder: $t('Cardholder'),
            },
            issuer: {
                id: 'form-checkout__issuer',
                placeholder: $t('Issuing bank'),
            },
            installments: {
                id: 'form-checkout__installments',
                placeholder: $t('Installments'),
            },
            identificationType: {
                id: 'form-checkout__identificationType',
                placeholder: $t('Document type'),
            },
            identificationNumber: {
                id: 'form-checkout__identificationNumber',
                placeholder: $t('Document number'),
            },
            cardholderEmail: {
                id: 'form-checkout__cardholderEmail',
                placeholder: $t('Email'),
            },
        },
        callbacks: {
            onFormMounted: (err: any) => {
                if (err) {
                    console.warn('Form Mounted handling error: ', err)
                    return
                }
                console.log('Form mounted')
            },
            onSubmit: async (event: Event) => {
                event.preventDefault()

                const { token, cardholderEmail } = cardForm.getCardFormData()

                isSubmitting.value = true
                error.value = null

                const [err, subscription] = await tryCatch(() => 
                    $fetch('/api/zpayments/mercadopago/subscriptions', {
                        method: 'POST',
                        data: {
                            gateway_id: gatewayId.value,
                            plan_id: Number(planId.value),
                            card_token: token,
                            email: cardholderEmail,
                        },
                    })
                )

                isSubmitting.value = false

                if (err) {
                    error.value = $t('Failed to create subscription. Please try again.')
                    console.error('Subscription error:', err)
                    return
                }

                console.log('Subscription created:', subscription)
                // TODO: Redirect to success page or show success message
            },
            onFetching: (resource: string) => {
                console.log('Fetching resource: ', resource)

                const progressBar = document.querySelector('.progress-bar') as HTMLProgressElement
                
                if (progressBar) {
                    progressBar.removeAttribute('value')
                }

                return () => {
                    if (progressBar) {
                        progressBar.setAttribute('value', '0')
                    }
                }
            },
        },
    })
}

onMounted(async () => {
    await loadPlan()

    if (!publicKey.value) {
        error.value = $t('Public key is required')
        return
    }

    await loadMercadoPago()
    
    mp = new window.MercadoPago(publicKey.value)

    await initializeCardForm()
})
</script>

<template>
    <div class="max-w-4xl mx-auto p-6">
        <div class="mb-8">
            <h1 class="text-3xl font-bold mb-2">
                {{ $t('Subscribe to Plan') }}
            </h1>
            <p class="text-gray-600">
                {{ $t('Complete your payment information to subscribe') }}
            </p>
        </div>

        <div
            v-if="error"
            class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4"
        >
            {{ error }}
        </div>

        <div
            v-if="isLoadingPlan"
            class="flex justify-center items-center py-12"
        >
            <div class="text-gray-500">
                {{ $t('Loading plan details...') }}
            </div>
        </div>

        <div
            v-if="plan && !isLoadingPlan"
            class="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
            <!-- Plan Details -->
            <div class="lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{{ $t('Plan Details') }}</CardTitle>
                        <CardDescription>{{ $t('Review your subscription') }}</CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div>
                            <div class="text-sm text-gray-500">
                                {{ $t('Plan Name') }}
                            </div>
                            <div class="font-semibold">
                                {{ plan.name }}
                            </div>
                        </div>
                        <div v-if="plan.description">
                            <div class="text-sm text-gray-500">
                                {{ $t('Description') }}
                            </div>
                            <div class="text-sm">
                                {{ plan.description }}
                            </div>
                        </div>
                        <div>
                            <div class="text-sm text-gray-500">
                                {{ $t('Amount') }}
                            </div>
                            <div class="text-2xl font-bold text-green-600">
                                {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(plan.amount / 100) }}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <!-- Payment Form -->
            <div class="lg:col-span-2 space-y-6">
                <form
                    id="form-checkout"
                    class="space-y-6"
                >
                    <!-- Card Information -->
                    <Card>
                        <CardHeader>
                            <CardTitle>{{ $t('Card Information') }}</CardTitle>
                            <CardDescription>{{ $t('Enter your card details') }}</CardDescription>
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <div>
                                <label
                                    for="form-checkout__cardholderName"
                                    class="block text-sm font-medium mb-2"
                                >
                                    {{ $t('Cardholder Name') }}
                                </label>
                                <input
                                    id="form-checkout__cardholderName"
                                    type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                                >
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">
                                    {{ $t('Card Number') }}
                                </label>
                                <div
                                    id="form-checkout__cardNumber"
                                    class="mp-field-container"
                                />
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium mb-2">
                                        {{ $t('Expiration Date') }}
                                    </label>
                                    <div
                                        id="form-checkout__expirationDate"
                                        class="mp-field-container"
                                    />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-2">
                                        {{ $t('Security Code') }}
                                    </label>
                                    <div
                                        id="form-checkout__securityCode"
                                        class="mp-field-container"
                                    />
                                </div>
                            </div>

                            <div class="hidden">
                                <label
                                    for="form-checkout__issuer"
                                    class="block text-sm font-medium mb-2"
                                >
                                    {{ $t('Issuing Bank') }}
                                </label>
                                <select
                                    id="form-checkout__issuer"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                                />
                            </div>

                            <div class="hidden">
                                <label
                                    for="form-checkout__installments"
                                    class="block text-sm font-medium mb-2"
                                >
                                    {{ $t('Installments') }}
                                </label>
                                <select
                                    id="form-checkout__installments"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Billing Information -->
                    <Card>
                        <CardHeader>
                            <CardTitle>{{ $t('Billing Information') }}</CardTitle>
                            <CardDescription>{{ $t('Enter your billing details') }}</CardDescription>
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <div>
                                <label
                                    for="form-checkout__cardholderEmail"
                                    class="block text-sm font-medium mb-2"
                                >
                                    {{ $t('Email') }}
                                </label>
                                <input
                                    id="form-checkout__cardholderEmail"
                                    type="email"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                                >
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        for="form-checkout__identificationType"
                                        class="block text-sm font-medium mb-2"
                                    >
                                        {{ $t('Document Type') }}
                                    </label>
                                    <select
                                        id="form-checkout__identificationType"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                                    />
                                </div>
                                <div>
                                    <label
                                        for="form-checkout__identificationNumber"
                                        class="block text-sm font-medium mb-2"
                                    >
                                        {{ $t('Document Number') }}
                                    </label>
                                    <input
                                        id="form-checkout__identificationNumber"
                                        type="text"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                                    >
                                </div>
                            </div>

                            <div class="pt-4">
                                <button
                                    id="form-checkout__submit"
                                    type="submit"
                                    :disabled="isSubmitting"
                                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {{ isSubmitting ? $t('Processing...') : $t('Subscribe Now') }}
                                </button>
                                <progress
                                    value="0"
                                    class="progress-bar w-full mt-2 h-1"
                                >
                                    {{ $t('Loading...') }}
                                </progress>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mp-field-container {
    height: 40px;
    display: inline-block;
    border: 1px solid rgb(209, 213, 219);
    border-radius: 0.375rem;
    padding: 2px 4px;
    width: 100%;
}

.progress-bar {
    appearance: none;
    border: none;
    background-color: #e5e7eb;
}

.progress-bar::-webkit-progress-bar {
    background-color: #e5e7eb;
    border-radius: 0.25rem;
}

.progress-bar::-webkit-progress-value {
    background-color: #3b82f6;
    border-radius: 0.25rem;
}

.progress-bar::-moz-progress-bar {
    background-color: #3b82f6;
    border-radius: 0.25rem;
}

.progress-bar[value="0"]::-webkit-progress-value {
    background-color: transparent;
}
</style>
