<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { $fetch } from '#client/utils'
import GatewayLayout from '#zpayments/client/layouts/GatewayLayout.vue'
import GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from '#client/components/ui/card'
import { $t } from '#shared/lang'
import Button from '#client/components/Button.vue'
import GatewayEntityTable from '#zpayments/client/components/GatewayEntityTable.vue'
import Icon from '#client/components/Icon.vue'

const syncing = ref(false)
const tableRef = ref<InstanceType<typeof GatewayEntityTable>>()
const loading = ref(false)
const gateway = ref<GatewayConfig>()

async function sync(){
    if (!gateway.value) return

    syncing.value = true

    const [error] = await $fetch.try(`/api/zpayments/gateways/${gateway.value.id}/customers/sync`, {
        method: 'POST'
    })

    if (error) {
        syncing.value = false
        return
    }

    toast.success($t('Customers synced successfully.'))

    setTimeout(() => {
        syncing.value = false
    }, 1000)
}

async function load(){
    tableRef.value?.load()
}

</script>

<template>
    <GatewayLayout v-model:gateway="gateway">
        <Card>
            <CardHeader>
                <CardTitle>
                    {{ $t('Customers') }}
                </CardTitle>
                <CardDescription>
                    {{ $t('Manage customers associated with this gateway.') }}
                </CardDescription>
                <CardAction class="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        :disabled="loading"
                        @click="load"
                    >
                        <Icon
                            name="RotateCcw"
                            :class="{ 'animate-spin': loading }"
                        />
                    </Button>
                    <Button
                        :loading="syncing"
                        @click="sync"
                    >
                        {{ $t('Sync') }}
                    </Button>
                </CardAction>
            </CardHeader>

            <CardContent>
                <GatewayEntityTable
                    ref="tableRef"
                    :gateway-id="gateway?.id"
                    entity-type="customer"
                />
            </CardContent>
        </Card>
    </GatewayLayout>
</template>