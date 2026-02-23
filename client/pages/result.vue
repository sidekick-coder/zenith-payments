<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { $t } from '#shared/lang'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '#client/components/ui/card/index.ts'
import Button from '#client/components/ui/button/Button.vue'
import Icon from '#client/components/Icon.vue'

const route = useRoute()
const router = useRouter()

const result = computed(() => route.query.result as string || 'unknown')
const message = computed(() => route.query.message as string || '')

const config = computed(() => {
    const resultType = result.value.toLowerCase()

    if (resultType === 'approved') {
        return {
            icon: 'CheckCircle',
            iconClass: 'text-green-500',
            title: $t('Payment Successful'),
            description: $t('Your payment has been processed successfully.'),
        }
    }

    if (resultType === 'failed') {
        return {
            icon: 'XCircle',
            iconClass: 'text-red-500',
            title: $t('Payment Failed'),
            description: $t('Unfortunately, your payment could not be processed.'),
        }
    }

    if (resultType === 'pending') {
        return {
            icon: 'Clock',
            iconClass: 'text-yellow-500',
            title: $t('Payment Pending'),
            description: $t('Your payment is being processed. Please wait.'),
        }
    }

    if (resultType === 'cancelled') {
        return {
            icon: 'Ban',
            iconClass: 'text-orange-500',
            title: $t('Payment Cancelled'),
            description: $t('The payment was cancelled.'),
        }
    }

    return {
        icon: 'AlertCircle',
        iconClass: 'text-gray-500',
        title: $t('Unknown Status'),
        description: $t('The payment status is unknown.'),
    }
})

function goToHome() {
    router.push('/')
}
</script>

<template>
    <div class="flex min-h-screen items-center justify-center p-4">
        <Card class="w-full max-w-md">
            <CardHeader class="text-center">
                <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    <Icon
                        :name="config.icon"
                        :class="['h-8 w-8', config.iconClass]"
                    />
                </div>
                <CardTitle class="text-2xl">
                    {{ config.title }}
                </CardTitle>
                <CardDescription class="text-base">
                    {{ message || config.description }}
                </CardDescription>
            </CardHeader>

            <CardContent class="flex justify-center">
                <Button
                    variant="default"
                    @click="goToHome"
                >
                    <Icon
                        name="Home"
                        class="mr-2 h-4 w-4"
                    />
                    {{ $t('Go to Home') }}
                </Button>
            </CardContent>
        </Card>
    </div>
</template>
