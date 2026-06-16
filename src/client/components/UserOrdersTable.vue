<script setup lang="ts">
import { format } from 'date-fns'
import type { ComponentExposed } from 'vue-component-type-helpers'
import { ref } from 'vue'
import { defineColumns } from '#client/components/DataTable.vue'
import DataTable from '#client/components/DataTable.vue'
import Order from '#zpayments/shared/entities/order.entity.ts'
import { Badge } from '#client/components/ui/badge/index.ts'

const props = defineProps({
    userId: {
        type: Number,
        required: true,
    },
})

const tableRef = ref<ComponentExposed<typeof DataTable>>()
const loading = defineModel('loading', {
    type: Boolean,
    default: false,
})

const columns = defineColumns([
    {
        id: 'id',
        label: $t('ID'),
        field: 'id',
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

function load() {
    return tableRef.value?.load()   
}

defineExpose({
    load,
})

</script>

<template>
    <DataTable
        ref="tableRef"
        v-model:loading="loading"
        :fetch="`/api/zpayments/users/${props.userId}/orders`"
        :columns="columns"
        :actions="[]"
        :serialize="row => Order.from(row)"
    >
        <template #row-status="{ row }">
            <Badge
                :style="{ '--color': row.statusColor }"
                class="bg-[var(--color)] text-white"
            >
                {{ row.statusLabel }}
            </Badge>
        </template>
    </DataTable>
</template>
