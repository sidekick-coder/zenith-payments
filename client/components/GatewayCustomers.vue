<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from '#client/components/ui/card'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import GatewayEntityTable from '#zpayments/client/components/GatewayEntityTable.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { $t } from '#shared/lang'
import type GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'

const props = defineProps<{
    gateway: GatewayConfig
}>()

const syncing = ref(false)
const loading = ref(false)
const tableRef = ref<InstanceType<typeof GatewayEntityTable>>()

async function sync() {
    syncing.value = true

    const [error] = await $fetch.try(`/api/zpayments/gateways/${props.gateway.id}/customers/sync`, {
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

async function load() {
    tableRef.value?.load()
}
</script>

<template>
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
                v-model:loading="loading"
                :gateway-id="gateway?.id"
                entity-type="customer"
            />
        </CardContent>
    </Card>
</template>
