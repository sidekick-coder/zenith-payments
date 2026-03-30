<script setup lang="ts">
import {  ref } from 'vue'
import { defineColumns } from '#client/components/DataTable.vue'
import PageCrud from '#client/components/PageCrud.vue'
import AdminLayout from '#client/layouts/AdminLayout.vue'
import Payment from '#zpayments/shared/entities/payment.entity.ts'
import { Badge } from '#client/components/ui/badge/index.ts'
import Button from '#client/components/Button.vue'
import Select from '#client/components/Select.vue'
import DatePicker from '#client/components/DatePicker.vue'
import { Card, CardContent } from '#client/components/ui/card/index.ts'


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
        field: row => $dt(row.created_at),
    },
    { id: 'actions' }
])


const fetchQuery = ref({
    status: '',
    start_date: null,
    end_date: null,
})

function clearFilters() {
    fetchQuery.value.status = ''
    fetchQuery.value.start_date = null
    fetchQuery.value.end_date = null
}

</script>

<template>
    <AdminLayout>
        <PageCrud
            v-model:fetch-query="fetchQuery"
            :title="$t('Payments')"
            :description="$t('View payment records here.')"
            :columns="columns"
            :serialize="row => Payment.from(row)"
            fetch="/api/zpayments/payments"
            :actions="[]"
        >
            <template #header-append>
                <Card class="mb-4">
                    <CardContent class="pt-6">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Select
                                v-model="fetchQuery.status"
                                :label="$t('Status')"
                                :placeholder="$t('All')"
                                :options="Payment.STATUS"
                                label-key="label"
                                value-key="id"
                                clearable
                            />

                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-medium">
                                    {{ $t('Start Date') }}
                                </label>
                                <DatePicker
                                    v-model="fetchQuery.start_date"
                                    mode="datetime"
                                    clearable
                                />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-medium">
                                    {{ $t('End Date') }}
                                </label>
                                <DatePicker
                                    v-model="fetchQuery.end_date"
                                    mode="datetime"
                                    clearable
                                />
                            </div>

                            <div class="flex items-end">
                                <Button
                                    variant="outline"
                                    @click="clearFilters"
                                >
                                    {{ $t('Clear Filters') }}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </template>

            <template #row-status="{ row }">
                <Badge
                    :style="{ '--color': row.statusColor }"
                    class="bg-[var(--color)] text-white"
                >
                    {{ row.statusLabel }}
                </Badge>
            </template>
            
            <template #prepend-actions="{ row }">
                <Button
                    size="sm"
                    tag="a"
                    :href="`/api/zpayments/payments/${row.id}/process`"
                    target="_blank"
                >
                    {{ $t('Process') }}
                </Button>
            </template>
        </PageCrud>
    </AdminLayout>
</template>
