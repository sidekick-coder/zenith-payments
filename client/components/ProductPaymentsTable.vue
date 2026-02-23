<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import { format } from 'date-fns'
import { toast } from 'vue-sonner'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
import { Card, CardAction, CardContent, CardHeader } from '#client/components/ui/card/index.ts'
import Payment from '#zpayments/shared/entities/payment.entity.ts'
import Badge from '#client/components/ui/badge/Badge.vue'

const props = defineProps({
    productId: {
        type: String,
        required: true
    }
})

const loading = ref(false)
const tableRef = ref<ComponentExposed<typeof DataTable>>()
const deletingItems = ref<number[]>([])

const fields = defineFormFields({
    gateway_id: {
        component: 'select',
        label: $t('Gateway'),
        fetch: '/api/zpayments/gateways',
        labelKey: 'name',
        valueKey: 'id',
    },
    user_id: {
        component: 'autocomplete',
        label: $t('User'),
        fetch: '/api/users',
        labelKey: 'name',
        valueKey: 'id',
        subtitleKey: 'email',
    },
})

const columns = defineColumns<Payment>([
    {
        id: 'id',
        label: $t('ID'),
        field: 'id',
    },
    {
        id: 'order_id',
        label: $t('Order'),
        field: row => `#${row.order_id}`,
    },
    {
        id: 'gateway_id',
        label: $t('Gateway ID'),
        field: 'gateway_id',
    },
    {
        id: 'status',
        label: $t('Status'),
        field: 'status',
    },
    {
        id: 'amount',
        label: $t('Amount'),
        field: 'amount',
    },
    {
        id: 'created_at',
        label: $t('Created At'),
        field: row => $d(row.created_at),
    },
])

function load() {
    tableRef.value?.load()
}

function onSubmit(response: any) {
    if (!response.checkout_url) {
        toast.error($t('Failed to get checkout URL'))
        return
    }
    
    // open in new tab
    window.open(response.checkout_url, '_blank')
}

defineExpose({
    load
})
</script>

<template>
    <Card>
        <CardHeader>
            <CardAction class="gap-x-2 flex">
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
                <DialogForm 
                    :fetch="`/api/zpayments/products/${productId}/payments`"
                    :title="$t('Add Payment')"
                    :description="$t('Fill in the details below to add a new payment')"
                    :fields="fields"
                    @submit="onSubmit"
                >
                    <Button>
                        {{ $t('Add Payment') }}
                    </Button>
                </DialogForm>
            </CardAction>
        </CardHeader>

        <CardContent>
            <DataTable
                ref="tableRef"
                v-model:loading="loading"
                :columns="columns"
                :serialize="row => Payment.from(row)"
                :fetch="`/api/zpayments/products/${productId}/payments`"
            >
                <template #row-status="{ row }">
                    <Badge
                        :style="{ '--color': row.statusColor }"
                        class="bg-[var(--color)] text-white"
                    >
                        {{ row.statusLabel }}
                    </Badge>
                </template>
            </DataTable>
        </CardContent>
    </Card>
</template>
