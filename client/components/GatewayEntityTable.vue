<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import { format } from 'date-fns'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'

import GatewayEntity from '#zpayments/shared/entities/gatewayEntity.entity.ts'
import ObjectInspect from '#client/components/ObjectInspect.vue'
import Button from '#client/components/Button.vue'

const props = defineProps({
    gatewayId: {
        type: String,
        default: null
    },
    entityType: {
        type: String,
        default: null
    }
})

const loading = ref(false)
const tableRef = ref<ComponentExposed<typeof DataTable>>()
const query = ref<Record<string, any>>({
    gateway_id: props.gatewayId,
    type: props.entityType
})

const columns = defineColumns<GatewayEntity>([
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
        id: 'type',
        label: $t('Type'),
        field: 'type',
    },
    {
        id: 'external_id',
        label: $t('External ID'),
        field: 'external_id',
    },
    {
        id: 'data',
        label: $t('Data'),
    },
    {
        id: 'updated_at',
        label: $t('Updated At'),
        field: row => format(new Date(row.updated_at), 'PP p'),
        width: 150,
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

function load(){
    tableRef.value?.load()
}

defineExpose({
    load
})
</script>
<template>
    <DataTable
        ref="tableRef"
        v-model:loading="loading"
        :columns="columns"
        :serialize="row => GatewayEntity.from(row)"
        :fetch-query="query"
        fetch="/api/zpayments/gateway-entities"
    >
        <template #row-actions="{ row }">
            <ObjectInspect
                :model-value="row.raw"
                content-class="sm:max-w-[1200px]"
            >
                <Button variant="outline">
                    {{ $t('Data') }}
                </Button>
            </ObjectInspect>
        </template>
    </DataTable>
</template>