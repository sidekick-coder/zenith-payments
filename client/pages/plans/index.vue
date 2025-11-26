<script setup lang="ts">
import { ref, computed } from 'vue'
import { toast } from 'vue-sonner'
import { $t } from '#shared/lang.ts'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import AppLayout from '#client/layouts/AppLayout.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '#client/components/ui/card'
import Plan from '#zpayments/shared/entities/plan.entity.ts'

const loading = ref(false)
const subscribing = ref<Record<number, boolean>>({})
const plans = ref<Plan[]>([])

async function loadPlans() {
    loading.value = true

    const [error, response] = await tryCatch(() => $fetch('/api/zpayments/plans', {
        query: {
            limit: 100,
        }
    }))

    loading.value = false

    if (error) {
        toast.error($t('Failed to load plans'))
        return
    }

    plans.value = response.items.map((item: any) => Plan.from(item))
}

async function subscribe(plan: Plan) {
    subscribing.value[plan.id] = true

    const [error, response] = await tryCatch(() => $fetch(`/api/zpayments/plans/${plan.id}/subscribe`, {
        method: 'POST',
        data: {
            gateway: 'mercadopago',
        }
    }))

    subscribing.value[plan.id] = false

    if (error) {
        return
    }

    if (response.checkoutUrl) {
        window.location.href = response.checkoutUrl
        return
    }

    toast.success($t('Successfully subscribed to plan'))
}

const activePlans = computed(() => plans.value.filter(plan => plan.status === 'active'))

loadPlans()
</script>

<template>
    <div class="py-10">
        <div class="max-w-6xl mx-auto">
            <div class="flex items-center justify-between mb-8">
                <div>
                    <h1 class="text-3xl font-bold text-foreground">
                        {{ $t('Plans') }}
                    </h1>
                    <p class="text-muted-foreground mt-2">
                        {{ $t('Choose the perfect plan for your needs') }}
                    </p>
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    :disabled="loading"
                    @click="loadPlans"
                >
                    <Icon
                        name="RotateCcw"
                        :class="{ 'animate-spin': loading }"
                    />
                </Button>
            </div>

            <div
                v-if="loading && plans.length === 0"
                class="flex items-center justify-center py-16"
            >
                <Icon
                    name="Loader2"
                    class="animate-spin h-8 w-8 text-muted-foreground"
                />
            </div>

            <div
                v-if="!loading && activePlans.length === 0"
                class="text-center py-16"
            >
                <p class="text-muted-foreground">
                    {{ $t('No plans available') }}
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                    v-for="plan in activePlans"
                    :key="plan.id"
                    class="flex flex-col"
                >
                    <CardHeader>
                        <CardTitle class="text-2xl">
                            {{ plan.name }}
                        </CardTitle>
                        <CardDescription v-if="plan.description">
                            {{ plan.description }}
                        </CardDescription>
                    </CardHeader>

                    <CardContent class="flex-1">
                        <div class="mb-6">
                            <div class="flex items-baseline gap-1">
                                <span class="text-4xl font-bold">
                                    {{ plan.amount }}
                                </span>
                                <span class="text-muted-foreground">
                                    /{{ $t('month') }}
                                </span>
                            </div>
                        </div>

                        <div
                            v-if="plan.status === 'active'"
                            class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                            :style="{ 
                                backgroundColor: `color-mix(in srgb, ${plan.statusColor} 15%, transparent)`,
                                color: plan.statusColor
                            }"
                        >
                            <Icon
                                name="CheckCircle2"
                                class="h-4 w-4"
                            />
                            {{ plan.statusLabel }}
                        </div>
                    </CardContent>

                    <CardFooter>
                        <Button
                            class="w-full"
                            :disabled="subscribing[plan.id]"
                            :href="`/api/zpayments/plans/${plan.id}/subscribe`"
                        >
                            <Icon
                                v-if="subscribing[plan.id]"
                                name="Loader2"
                                class="animate-spin mr-2 h-4 w-4"
                            />
                            {{ subscribing[plan.id] ? $t('Subscribing...') : $t('Subscribe') }}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
</template>
