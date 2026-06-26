<script setup lang="ts">
import {
    defineFormFields,
    DialogForm,
    ZAlertButton,
    ZButton,
    Icon,
    Button,
    DataTable,
    PageTitle,
    PageSubtitle,
} from '@sidekick-coder/zenith-kit/components'
import { useFetchPagination, defineColumns } from '@sidekick-coder/zenith-kit/client'
import { type OrderSchema } from '#zpayments/shared/schemas/orderSchema.ts'
import currencies from '#zpayments/shared/data/currencies.json'
import { onMounted, onServerPrefetch } from 'vue'

const { items: rows, loading, load, hydrate } = useFetchPagination<OrderSchema>('/api/zpayments/orders')

const columns = defineColumns<OrderSchema>([
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
        field: row => $dt(row.created_at),
    },
    { id: 'actions' },
])

const fields = defineFormFields({
    user_id: {
        component: 'autocomplete',
        label: $t('User ID'),
        fetch: '/api/users',
        fetchOption: '/api/users/:value',
        labelKey: 'name',
        valueKey: 'id',
    },
    purpose: {
        component: 'text-field',
        label: $t('Purpose'),
    },
    currency: {
        component: 'autocomplete',
        label: $t('Currency'),
        options: currencies,
        labelKey: 'label',
        valueKey: 'code',
    },
})

onMounted(hydrate)
onServerPrefetch(hydrate)
</script>

<template>
    <div class="flex items-center justify-between mb-6">
        <div>
            <PageTitle>
                {{ $t('Orders') }}
            </PageTitle>
            <PageSubtitle>
                {{ $t('Manage your orders') }}
            </PageSubtitle>
        </div>
        <div class="flex items-center gap-2">
            <DialogForm
                :title="$t('Add new')"
                :fields="fields"
                :values="{ status: 'pending', currency: 'USD' }"
                fetch="/api/zpayments/orders"
                fetch-method="POST"
                @submit="load"
            >
                <Button>
                    {{ $t('Add new') }}
                </Button>
            </DialogForm>

            <Button
                variant="outline"
                @click="load"
            >
                <Icon
                    name="refreshCw"
                    :class="{ 'animate-spin': loading }"
                />
            </Button>
        </div>
    </div>

    <DataTable
        :rows="rows"
        :columns="columns"
        :loading="loading"
    >
        <template #row-actions="{ row }">
            <div class="flex items-center gap-2 justify-end">
                <ZButton
                    variant="ghost"
                    size="sm"
                    :to="`/admin/zpayments/orders/${row.id}`"
                >
                    <Icon name="Edit" />
                </ZButton>

                <ZAlertButton
                    variant="ghost"
                    size="sm"
                    fetch-method="DELETE"
                    :fetch="`/api/zpayments/orders/${row.id}`"
                    :toast-on-success="$t('Deleted successfully')"
                    @fetched="load"
                >
                    <Icon name="trash" />
                </ZAlertButton>
            </div>
        </template>
    </DataTable>
</template>
