<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import type { ComponentExposed } from 'vue-component-type-helpers'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'

import AppLayout from '#client/layouts/AppLayout.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import ClientOnly from '#client/components/ClientOnly.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
import schemas from '#zpayments/shared/validators/index.ts'
import GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'

const loading = ref(false)
const tableRef = ref<ComponentExposed<typeof DataTable>>()
const deletingItems = ref<string[]>([])

const columns = defineColumns<GatewayConfig>([
    {
        id: 'id',
        label: 'ID',
        field: 'id',
        width: 200,
    },
    {
        id: 'name',
        label: $t('Name'),
        field: 'name',
    },
    {
        id: 'description',
        label: $t('Description'),
        field: 'description',
    },
    { id: 'actions' }
])


const fields = defineFormFields({
    id: {
        component: 'text-field',
        label: 'ID',
    },
    gateway: {
        component: 'select',
        label: $t('Gateway'),
        options: GatewayConfig.GATEWAY_OPTIONS,
        labelKey: 'label',
        valueKey: 'id',
    },
    name: {
        component: 'text-field',
        label: $t('Name'),
    },
    description: {
        component: 'text-field',
        label: $t('Description'),
    },
})


function load(){
    tableRef.value?.load()
}

function reset() {
    tableRef.value?.reset()
}

async function destroy(id: string) {
    deletingItems.value.push(id)

    const [error] = await $fetch.try(`/api/zpayments/gateways/${id}`, {
        method: 'DELETE', 
    })

    if (error) {
        deletingItems.value = []
        return
    }

    setTimeout(() => {
        toast.success($t('Deleted successfully.'))
        reset()
    }, 1000)

}
</script>
<template>
    <AppLayout>
        <div class="flex">
            <h1 class="text-2xl font-bold mb-4 text-foreground flex-1">
                {{ $t('Gateways') }}
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
                        :fetch="`/api/zpayments/gateways`"
                        :title="$t('Add new')"
                        :description="$t('Fill in the details below to add a new gateway')"
                        :schema="schemas.gateway.create"
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
            :serialize="row => GatewayConfig.from(row)"
            fetch="/api/zpayments/gateways"
        >
            <template #row-actions="{ row }">
                <div class="flex items-center gap-2 justify-end">                    
                    <Button
                        size="icon"
                        variant="ghost"
                        :to="`/admin/zpayments/gateways/${row.id}`"
                    >
                        <Icon name="Edit" />
                    </Button>

                    <AlertButton 
                        variant="ghost"
                        size="sm"
                        :loading="deletingItems.includes(row.id)"
                        @confirm="destroy(row.id)"
                    >
                        <Icon name="trash" />
                    </AlertButton>
                </div>
            </template>
        </DataTable>
    </AppLayout>
</template>
