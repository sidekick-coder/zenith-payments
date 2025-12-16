<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import { format } from 'date-fns'
import { toast } from 'vue-sonner'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import ProductMeta from '#zpayments/shared/entities/productMeta.entity.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { Card, CardAction, CardContent, CardHeader } from '#client/components/ui/card/index.ts'
import schemas from '#zpayments/shared/validators/index.ts'

const props = defineProps({
    productId: {
        type: String,
        required: true
    }
})

const loading = ref(false)
const tableRef = ref<ComponentExposed<typeof DataTable>>()
const deletingItems = ref<number[]>([])

const fields = defineFormFields({
    name: {
        component: 'text-field',
        label: $t('Name'),
    },
    value: {
        component: 'textarea',
        label: $t('Value'),
    },
})

const columns = defineColumns<ProductMeta>([
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
        id: 'value',
        label: $t('Value'),
        field: 'value',
    },
    {
        id: 'created_at',
        label: $t('Created At'),
        field: row => format(new Date(row.created_at), 'PP p'),
        width: 150,
    },
    { 
        id: 'actions',
        width: 200
    }
])

function load() {
    tableRef.value?.load()
}

defineExpose({
    load
})
</script>

<template>
    <Card>
        <CardHeader>
            <CardAction>
                <DialogForm 
                    :fetch="`/api/zpayments/products/${productId}/metas`"
                    :title="$t('Add Meta')"
                    :description="$t('Fill in the details below to add a new meta')"
                    :schema="schemas.productMeta.create"
                    :fields="fields"
                    @submit="load"
                >
                    <Button>
                        {{ $t('Add Meta') }}
                    </Button>
                </DialogForm>
            </CardAction>
        </CardHeader>

        <CardContent>
            <DataTable
                ref="tableRef"
                v-model:loading="loading"
                :columns="columns"
                :serialize="row => ProductMeta.from(row)"
                :fetch="`/api/zpayments/products/${productId}/metas`"
            >
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <DialogForm 
                            :fetch="`/api/zpayments/products/${productId}/metas/${row.id}`"
                            :title="$t('Edit Meta')"
                            :description="$t('Fill in the details below to edit the meta')"
                            :schema="schemas.productMeta.update"
                            :fields="fields"
                            :values="row"
                            method="PUT"
                            @submit="load"
                        >
                            <Button
                                size="icon"
                                variant="ghost"
                            >
                                <Icon name="Edit" />
                            </Button>
                        </DialogForm>

                        <AlertButton
                            variant="ghost"
                            :title="$t('Delete Meta')"
                            :description="$t('Are you sure you want to delete this meta?')"
                            :loading="deletingItems.includes(row.id)"
                            :fetch="`/api/zpayments/products/${props.productId}/metas/${row.id}`"
                            @fetched="load"
                        >
                            <Icon name="Trash" />
                        </AlertButton>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>
</template>
