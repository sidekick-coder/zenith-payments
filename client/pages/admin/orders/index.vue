<script setup lang="ts">
import { format } from 'date-fns'
import { defineColumns } from '#client/components/DataTable.vue'
import PageCrud from '#client/components/PageCrud.vue'
import AppLayout from '#client/layouts/AppLayout.vue'

const columns = defineColumns([
    {
        id: 'id',
        label: $t('ID'),
        field: 'id',
    },
    {
        id: 'user_id',
        label: $t('User ID'),
        field: 'user_id',
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
    <AppLayout>
        <PageCrud
            :title="$t('Orders')"
            :description="$t('View order records here.')"
            :columns="columns"
            fetch="/api/zpayments/orders"
            :actions="[]"
        />
    </AppLayout>
</template>
