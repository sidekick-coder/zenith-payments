<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import { format } from 'date-fns'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'

import AppLayout from '#client/layouts/AppLayout.vue'
import ClientOnly from '#client/components/ClientOnly.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
import schemas from '#zpayments/shared/validators/index.ts'
import Subscription from '#zpayments/shared/entities/subscription.entity.ts'

const loading = ref(false)
const tableRef = ref<ComponentExposed<typeof DataTable>>()
const formRef = ref<ComponentExposed<typeof DialogForm>>()

const columns = defineColumns<Subscription>([
    {
        id: 'id',
        label: 'ID',
        field: 'id',
        width: 50,
    },
    {
        id: 'user',
        label: $t('User'),
        field: 'user_id',
        width: 150,
    },
    {
        id: 'plan',
        label: $t('Plan'),
        field: row => row.plan?.name || `Plan #${row.plan?.id || 'N/A'}`,
        width: 150,
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
    { 
        id: 'actions',
        width: 150 
    }
])

const fields = defineFormFields({
    user_id: {
        component: 'autocomplete',
        label: $t('User ID'),
        fetch: '/api/users',
        labelKey: 'name',
        valueKey: 'id',
        avatarKey: 'avatar_url',
        subtitleKey: 'email'
    },
    plan_id: {
        component: 'autocomplete',
        label: 'Plan ID',
        type: 'number',
        fetch: '/api/zpayments/plans',
        labelKey: 'name',
        valueKey: 'id',
        'onUpdate:selected-object': (plan: any) => {
            if (plan && formRef.value) {
                formRef.value.setFieldValue('amount', plan.amount)
            }
        }
    },
    amount: {
        component: 'text-field',
        label: 'Amount',
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
                {{ $t('Subscriptions') }}
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
                        ref="formRef"
                        :fetch="`/api/zpayments/subscriptions`"
                        :title="$t('Add new')"
                        :description="$t('Fill in the details below to add a new subscription')"
                        :schema="schemas.subscription.create"
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
            :serialize="row => Subscription.from(row)"
            fetch="/api/zpayments/subscriptions"
        >
            <template #row-user="{ row }">
                <div>
                    <div v-if="row.user">
                        {{ row.user.name }}
                    </div>
                    <div class="text-muted-foreground text-xs">
                        {{ row.user?.email }}
                    </div>
                </div>
            </template>

            <template #row-plan="{ row }">
                <div>
                    <span v-if="row.plan">
                        {{ row.plan.name }}
                    </span>
                    <span 
                        v-else 
                        class="text-muted-foreground"
                    >
                        {{ $t('Plan') }} #{{ row.plan?.id || 'N/A' }}
                    </span>
                </div>
            </template>

            <template #row-amount="{ row }">
                <div>
                    {{ row.amount }}
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
                        v-if="row.status === 'active'"
                        size="sm"
                        class="bg-red-600 hover:bg-red-700"
                        :title="$t('Deactivate Subscription')"
                        :description="$t('Deactivate this subscription')"
                        :fetch="`/api/zpayments/subscriptions/${row.id}/deactivate`"
                        @fetched="load"
                    >
                        {{ $t('Deactivate') }}
                    </AlertButton>
                    
                    <AlertButton 
                        v-if="row.status === 'inactive'"
                        size="sm"
                        class="bg-green-600 hover:bg-green-700"
                        :title="$t('Activate Subscription')"
                        :description="$t('Activate this subscription')"
                        :fetch="`/api/zpayments/subscriptions/${row.id}/activate`"
                        @fetched="load"
                    >
                        {{ $t('Activate') }}
                    </AlertButton>
                    
                    <AlertButton 
                        variant="ghost"
                        size="sm"
                        fetch-method="DELETE"
                        :title="$t('Delete Subscription')"
                        :description="$t('Permanently delete this subscription record. This action cannot be undone.')"
                        :fetch="`/api/zpayments/subscriptions/${row.id}`"
                        @fetched="load"
                    >
                        <Icon
                            name="Trash"
                        />
                    </AlertButton>
                </div>
            </template>
        </DataTable>
    </AppLayout>
</template>
