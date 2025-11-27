<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { $fetch } from '#client/utils'
import GatewayLayout from '#zpayments/client/layouts/GatewayLayout.vue'
import GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from '#client/components/ui/card'
import { $t } from '#shared/lang'
import Button from '#client/components/Button.vue'

const syncing = ref(false)
const gateway = ref<GatewayConfig>()

async function sync(){
    if (!gateway.value) return

    syncing.value = true

    const [error] = await $fetch.try(`/api/zpayments/gateways/${gateway.value.id}/subscriptions/sync`, {
        method: 'POST'
    })

    if (error) {
        syncing.value = false
        return
    }

    toast.success($t('Subscriptions synced successfully.'))

    setTimeout(() => {
        syncing.value = false
    }, 1000)
}

</script>

<template>
    <GatewayLayout v-model:gateway="gateway">
        <Card>
            <CardHeader>
                <CardTitle>
                    {{ $t('Subscriptions') }}
                </CardTitle>
                <CardDescription>
                    {{ $t('Manage subscriptions associated with this gateway.') }}
                </CardDescription>
                <CardAction>
                    <Button
                        :loading="syncing"
                        @click="sync"
                    >
                        {{ $t('Sync') }}
                    </Button>
                </CardAction>
            </CardHeader>

            <CardContent />
        </Card>
    </GatewayLayout>
</template>