<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import { format } from 'date-fns'
import { toast } from 'vue-sonner'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import ProductPrice from '#zpayments/shared/entities/productPrice.entity.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
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
    amount: {
        component: 'text-field',
        label: $t('Price'),
        type: 'number',
    },
    currency: {
        component: 'text-field',
        label: $t('Currency'),
    },
})

const columns = defineColumns<ProductPrice>([
    {
        id: 'id',
        label: 'ID',
        field: 'id',
        width: 50,
    },
    {
        id: 'amount',
        label: $t('Price'),
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
            <CardAction class="gap-x-2 flex">
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
                <DialogForm 
                    :fetch="`/api/zpayments/products/${productId}/prices`"
                    :title="$t('Add Price')"
                    :description="$t('Fill in the details below to add a new price')"
                    :schema="schemas.productPrice.create"
                    :fields="fields"
                    @submit="load"
                >
                    <Button>
                        {{ $t('Add Price') }}
                    </Button>
                </DialogForm>
            </CardAction>
        </CardHeader>

        <CardContent>
            <DataTable
                ref="tableRef"
                v-model:loading="loading"
                :columns="columns"
                :serialize="row => ProductPrice.from(row)"
                :fetch="`/api/zpayments/products/${productId}/prices`"
            >
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <DialogForm 
                            :fetch="`/api/zpayments/products/${productId}/prices/${row.id}`"
                            :title="$t('Edit Price')"
                            :description="$t('Fill in the details below to edit the price')"
                            :schema="schemas.productPrice.update"
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
                            :title="$t('Delete Price')"
                            :description="$t('Are you sure you want to delete this price?')"
                            :loading="deletingItems.includes(row.id)"
                            :fetch="`/api/zpayments/products/${productId}/prices/${row.id}`"
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
