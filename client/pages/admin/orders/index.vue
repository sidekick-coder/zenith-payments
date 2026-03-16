<script setup lang="ts">
import { format } from 'date-fns'
import { defineColumns } from '#client/components/DataTable.vue'
import PageCrud from '#client/components/PageCrud.vue'
import AdminLayout from '#client/layouts/AdminLayout.vue'
import Order from '#zpayments/shared/entities/order.entity.ts'
import { Badge } from '#client/components/ui/badge/index.ts'

const columns = defineColumns([
    {
        id: 'id',
        label: $t('ID'),
        field: 'id',
    },
    {
        id: 'user',
        label: $t('User'),
    },
    {
        id: 'purpose',
        label: $t('Purpose'),
        field: 'purpose',
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
        id: 'currency',
        label: $t('Currency'),
        field: 'currency',
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
    <AdminLayout>
        <PageCrud
            fetch="/api/zpayments/orders"
            :title="$t('Orders')"
            :description="$t('View order records here.')"
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
        </PageCrud>
    </AdminLayout>
</template>
