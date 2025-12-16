<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import { format } from 'date-fns'
import { toast } from 'vue-sonner'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import ProductMeta from '#zpayments/shared/entities/productMeta.entity.ts'
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
    gateway_id: {
        component: 'select',
        label: $t('Gateway'),
        fetch: '/api/zpayments/gateways',
        labelKey: 'name',
        valueKey: 'id',
    },
    user_id: {
        component: 'autocomplete',
        label: $t('User'),
        fetch: '/api/users',
        labelKey: 'name',
        valueKey: 'id',
        subtitleKey: 'email',
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

function onSubmit(response: any) {
    if (!response.checkout_url) {
        toast.error($t('Failed to get checkout URL'))
        return
    }
    
    window.location.href = response.checkout_url
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
                    :fetch="`/api/zpayments/products/${productId}/payments`"
                    :title="$t('Add Payment')"
                    :description="$t('Fill in the details below to add a new payment')"
                    :fields="fields"
                    @submit="onSubmit"
                >
                    <Button>
                        {{ $t('Add Payment') }}
                    </Button>
                </DialogForm>
            </CardAction>
        </CardHeader>

        <CardContent>
            <!-- <DataTable
                ref="tableRef"
                v-model:loading="loading"
                :columns="columns"
                :serialize="row => ProductMeta.from(row)"
                :fetch="`/api/zpayments/products/${productId}/payments`"
            /> -->
        </CardContent>
    </Card>
</template>
