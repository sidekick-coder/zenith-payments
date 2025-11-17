<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import { format } from 'date-fns'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import { $t } from '#shared/lang.ts'
import AppLayout from '#client/layouts/AppLayout.vue'
import ClientOnly from '#client/components/ClientOnly.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
import schemas from '#zpayments/shared/validators/index.ts'
import Billing from '#zpayments/shared/entities/billing.entity.ts'

const loading = ref(false)
const tableRef = ref<ComponentExposed<typeof DataTable>>()

const columns = defineColumns<Billing>([
    {
        id: 'id',
        label: 'ID',
        field: 'id',
        width: 50,
    },
    {
        id: 'user',
        label: $t('User'),
    },
    {
        id: 'amount',
        label: $t('Amount'),
        field: 'amount',
        width: 120,
    },
    {
        id: 'status',
        label: $t('Status'),
        field: 'status',
        width: 120,
    },
    {
        id: 'created_at',
        label: $t('Created At'),
        field: row => format(new Date(row.created_at), 'PP p'),
        width: 150,
    },
    { id: 'actions' }
])

const fields = defineFormFields({
    user_id: {
        component: 'autocomplete',
        label: $t('User ID'),
        fetch: '/api/users',
        labelKey: 'name',
        valueKey: 'id',
        subtitleKey: 'email'
    },
    purpose: {
        component: 'text-field',
        label: $t('Purpose'),
    },
    amount: {
        component: 'text-field',
        label: $t('Amount'),
        type: 'number',
        step: '0.01'
    },
})

function load(){
    tableRef.value?.load()
}
</script>

<template>
    <AppLayout>
        <div class="flex">
            <h1 class="text-2xl font-bold mb-4 text-foreground flex-1">
                {{ $t('Billings') }}
            </h1>
            <div class="flex items-center gap-2">
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
                <ClientOnly>
                    <DialogForm 
                        :fetch="`/api/zpayments/billings`"
                        :title="$t('Add new')"
                        :description="$t('Fill in the details below to add a new billing')"
                        :schema="schemas.billing.create"
                        :fields="fields"
                        @submit="load"
                    >
                        <Button>
                            {{ $t('Add new') }}
                        </Button>
                    </DialogForm>
                </ClientOnly>
            </div>
        </div>

        <DataTable
            ref="tableRef"
            v-model:loading="loading"
            :columns="columns"
            :serialize="row => Billing.from(row)"
            fetch="/api/zpayments/billings"
        >
            <template #row-user="{ row }">
                <div>
                    <div>{{ row.user?.name || $t('Unknown User') }}</div>
                    <div class="text-muted-foreground text-xs">
                        {{ row.user?.email }}
                    </div>
                </div>
            </template>

            <template #row-status="{ row }">
                <span 
                    :style="{ '--color': row.statusColor }"
                    class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[var(--color)] text-white"
                >
                    {{ row.statusLabel }}
                </span>
            </template>

            <template #row-actions="{ row }">
                <div class="flex items-center gap-2 justify-end">
                    <AlertButton 
                        v-if="row.status === 'pending'"
                        size="sm"
                        class="bg-green-600 hover:bg-green-700"
                        :title="$t('Approve Billing')"
                        :description="$t('Mark this billing as approved and process the payment')"
                        :fetch="`/api/zpayments/billings/${row.id}/approve`"
                        @fetched="load"
                    >
                        {{ $t('Approve') }}
                    </AlertButton>
                    
                    <AlertButton 
                        v-if="row.status === 'pending'"
                        size="sm"
                        class="bg-red-600 hover:bg-red-700"
                        :title="$t('Fail Billing')"
                        :description="$t('Mark this billing as failed and cancel the payment')"
                        :fetch="`/api/zpayments/billings/${row.id}/fail`"
                        @fetched="load"
                    >
                        {{ $t('Fail') }}
                    </AlertButton>
                    
                    <AlertButton 
                        v-if="row.status === 'approved'"
                        size="sm"
                        class="bg-blue-600 hover:bg-blue-700"
                        :title="$t('Refund Billing')"
                        :description="$t('Process a refund for this successful billing')"
                        :fetch="`/api/zpayments/billings/${row.id}/refund`"
                        @fetched="load"
                    >
                        {{ $t('Refund') }}
                    </AlertButton>
                    
                    <AlertButton 
                        v-if="row.status !== 'pending'"
                        size="sm"
                        class="bg-orange-600 hover:bg-orange-700"
                        :title="$t('Reopen Billing')"
                        :description="$t('Reopen this billing and set it back to pending status')"
                        :fetch="`/api/zpayments/billings/${row.id}/reopen`"
                        @fetched="load"
                    >
                        {{ $t('Reopen') }}
                    </AlertButton>
                    
                    <AlertButton 
                        variant="destructive"
                        size="sm"
                        fetch-method="DELETE"
                        :title="$t('Delete Billing')"
                        :description="$t('Permanently delete this billing record. This action cannot be undone.')"
                        :fetch="`/api/zpayments/billings/${row.id}`"
                        @fetched="load"
                    >
                        {{ $t('Delete') }}
                    </AlertButton>
                </div>
            </template>
        </DataTable>
    </AppLayout>
</template>
