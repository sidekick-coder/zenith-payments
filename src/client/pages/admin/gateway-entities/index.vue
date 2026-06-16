<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import { format } from 'date-fns'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'

import AdminLayout from '#client/layouts/AdminLayout.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import GatewayEntity from '#zpayments/shared/entities/gatewayEntity.entity.ts'
import PageTitle from '#client/components/PageTitle.vue'
import PageSubtitle from '#client/components/PageSubtitle.vue'
import ObjectInspect from '#client/components/ObjectInspect.vue'
import GatewayEntityTable from '#zpayments/client/components/GatewayEntityTable.vue'

const loading = ref(false)
const tableRef = ref<ComponentExposed<typeof DataTable>>()

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
</script>

<template>
    <AdminLayout>
        <div class="flex flex-col mb-4">
            <PageTitle>{{ $t('Entities') }}</PageTitle>
            <PageSubtitle>
                {{ $t('Data related to gateway') }}
            </PageSubtitle>
        </div>

        <GatewayEntityTable
            ref="tableRef"
            v-model:loading="loading"
        />
    </AdminLayout>
</template>
