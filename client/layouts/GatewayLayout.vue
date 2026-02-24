<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#client/components/ui/card'
import AppLayout from '#client/layouts/AppLayout.vue'
import GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'
import { $fetch } from '#client/utils'
import Button from '#client/components/Button.vue'

const route = useRoute()
const id = computed(() => route.params.id as string)

const gateway = defineModel<GatewayConfig>('gateway', {
    type: Object
})

const menu = [
    {
        label: $t('Details'),
        to: `/admin/zpayments/gateways/${id.value}/details`,
    },
    {
        label: $t('Subscriptions'),
        to: `/admin/zpayments/gateways/${id.value}/subscriptions`,
    },
    {
        label: $t('Customers'),
        to: `/admin/zpayments/gateways/${id.value}/customers`,
    },
    {
        label: $t('Configuration'),
        to: `/admin/zpayments/gateways/${id.value}/config`,
    }
]


async function load(){
    const [error, response] = await $fetch.try<GatewayConfig>(`/api/zpayments/gateways/${id.value}`)
    
    if (error) {
        console.error('Failed to load gateway config', error)
        return
    }

    gateway.value = GatewayConfig.from(response)
}

onMounted(load)

</script>

<template>
    <AppLayout>
        <div class="flex [&>*]:px-4 -mx-4">
            <div class="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                <Card v-if="gateway">
                    <CardHeader>
                        <CardTitle>{{ gateway.name }}</CardTitle>
                        <CardDescription>{{ gateway.gateway }}</CardDescription>
                    </CardHeader>
                    <CardContent class="flex flex-col">
                        <Button
                            v-for="item in menu"
                            :key="item.label"
                            :to="item.to"
                            :variant="item.to === route.path ? 'default' : 'ghost'"
                            class="w-full justify-start"
                        >
                            {{ item.label }}
                        </Button>
                    </CardContent>
                </Card>
            </div>
            <div class="w-full md:w-6/12 lg:w-8/12 xl:w-9/12">
                <slot v-if="gateway" />
            </div>
        </div>
    </AppLayout>
</template>