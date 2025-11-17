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
import Plan from '#zpayments/shared/entities/plan.entity.ts'

const loading = ref(false)
const tableRef = ref<ComponentExposed<typeof DataTable>>()

const columns = defineColumns<Plan>([
    {
        id: 'id',
        label: 'ID',
        field: 'id',
        width: 50,
    },
    {
        id: 'name',
        label: $t('Name'),
        field: 'name',
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
    name: {
        component: 'text-field',
        label: $t('Name')
    },
    description: {
        component: 'text-field',
        label: $t('Description')
    },
    amount: {
        component: 'text-field',
        label: $t('Amount'),
        type: 'number',
        step: '0.01'
    },
    status: {
        component: 'select',
        label: $t('Status'),
        options: Plan.STATUS.map(status => ({
            label: status.label,
            value: status.id
        }))
    }
})

function load(){
    tableRef.value?.load()
}
</script>

<template>
    <AppLayout>
        <div class="flex">
            <h1 class="text-2xl font-bold mb-4 text-foreground flex-1">
                {{ $t('Plans') }}
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
                        :fetch="`/api/zpayments/plans`"
                        :title="$t('Add new')"
                        :description="$t('Fill in the details below to add a new plan')"
                        :schema="schemas.plan.create"
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
            :serialize="row => Plan.from(row)"
            fetch="/api/zpayments/plans"
        >
            <template #row-name="{ row }">
                <div
                    class="max-w-xs truncate"
                    :title="row.name"
                >
                    {{ row.name }}
                </div>
                <div
                    v-if="row.description"
                    class="text-sm text-muted-foreground"
                >
                    {{ row.description }}
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
                    <ClientOnly>
                        <DialogForm 
                            :fetch="`/api/zpayments/plans/${row.id}`"
                            method="PUT"
                            :title="$t('Edit Plan')"
                            :description="$t('Update the plan details below')"
                            :schema="schemas.plan.update"
                            :fields="fields"
                            :values="row"
                            @submit="load"
                        >
                            <Button
                                size="sm"
                                variant="ghost"
                            >
                                <Icon
                                    name="Edit"
                                />
                            </Button>
                        </DialogForm>
                    </ClientOnly>
                    
                    <AlertButton 
                        variant="ghost"
                        size="sm"
                        fetch-method="DELETE"
                        :title="$t('Delete Plan')"
                        :description="$t('Permanently delete this plan record. This action cannot be undone.')"
                        :fetch="`/api/zpayments/plans/${row.id}`"
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
