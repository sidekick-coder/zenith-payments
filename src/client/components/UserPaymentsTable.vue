<script setup lang="ts">
import { format } from 'date-fns'
import { defineColumns } from '#client/components/DataTable.vue'
import DataTable from '#client/components/DataTable.vue'
import Order from '#zpayments/shared/entities/order.entity.ts'
import { Badge } from '#client/components/ui/badge/index.ts'

const props = defineProps({
    userId: {
        type: Number,
        required: true,
    },
})

const columns = defineColumns([
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
        field: row => format(new Date(row.created_at), 'PPpp'),
    },
    { id: 'actions' }
])

</script>

<template>
    <DataTable
        :fetch="`/api/zpayments/users/${props.userId}/payments`"
        :columns="columns"
        :actions="[]"
        :serialize="row => Order.from(row)"
        :fetch-query="{
            include: ['user']
        }"
    >
        <template #row-user="{ row }">
            <div v-if="!row.user">
                {{ row.user_id }}
            </div>
            <div v-else>
                <div>{{ row.user.name }}</div>
                <div class="text-sm text-gray-500">
                    {{ row.user.email }}
                </div>
            </div>
        </template>

        <template #row-status="{ row }">
            <Badge
                :style="{ '--color': row.statusColor }"
                class="bg-[var(--color)] text-white"
            >
                {{ row.statusLabel }}
            </Badge>
        </template>
    </DataTable>
</template>
