<script setup lang="ts">
import { format } from 'date-fns'
import { defineColumns } from '#client/components/DataTable.vue'
import PageCrud from '#client/components/PageCrud.vue'
import AppLayout from '#client/layouts/AppLayout.vue'
import Payment from '#zpayments/shared/entities/payment.entity.ts'
import { Badge } from '#client/components/ui/badge/index.ts'

const columns = defineColumns([
    {
        id: 'id',
        label: $t('ID'),
        field: 'id',
    },
    {
        id: 'order_id',
        label: $t('Order ID'),
        field: 'order_id',
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
        field: row => format(new Date(row.created_at), 'PPpp'),
    },
    { id: 'actions' }
])

</script>

<template>
    <AppLayout>
        <PageCrud
            :title="$t('Payments')"
            :description="$t('View payment records here.')"
            :columns="columns"
            :serialize="row => Payment.from(row)"
            fetch="/api/zpayments/payments"
            :actions="[]"
        >
            <template #row-status="{ row }">
                <Badge
                    :style="{ '--color': row.statusColor }"
                    class="bg-[var(--color)] text-white"
                >
                    {{ row.statusLabel }}
                </Badge>
            </template>
        </PageCrud>
    </AppLayout>
</template>
