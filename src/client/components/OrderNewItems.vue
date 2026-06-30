<script setup lang="ts">
import { defineFormFields } from '#client/components/FormAutoFieldList.vue';
import { defineColumns, toast } from '@sidekick-coder/zenith-kit/client';
import {
    ZDataTable,
    ZButton,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardAction,
    DialogForm,
    Icon
} from '@sidekick-coder/zenith-kit/components';
import { formatAmount } from '../utils/formatAmount';
import type { ProductPriceSchema } from '#zpayments/shared/schemas/productPriceSchema.ts';
import type { OrderCreateSchema } from '#zpayments/shared/schemas/orderSchema.ts';

const items = defineModel<OrderCreateSchema['items']>('items', {
    type: Array,
    default: () => []
})

const columns = defineColumns<OrderCreateSchema['items'][number]>([
    {
        id: 'product',
        label: $t('Product'),
        field: 'product.name'
    },
    {
        id: 'unit_price',
        label: $t('Unit Price'),
        field: row => formatAmount(row.unit_amount, row.currency)
    },
    {
        id: 'quantity',
        label: $t('Quantity'),
    },
    {
        id: 'total',
        label: $t('Total'),
        field: row => formatAmount(row.unit_amount * row.quantity, row.currency)
    },
    { id: 'actions' }
])

const fields = defineFormFields({
    price: {
        component: 'autocomplete',
        fetch: '/api/zpayments/prices?with=product',
        valuekey: 'id',
        labelKey: (o: any) => `#${o.product_id}.${o.id}  - ${o.product?.name} ${formatAmount(o.amount, o.currency)}`
    }
})

function updateRow(row: any, payload: any) {
    const index = items.value.indexOf(row)
    const raw = JSON.parse(JSON.stringify(items.value))

    raw[index] = {
        ...raw[index],
        ...payload
    }

    items.value = raw
}

function remove(row: any) {
    const index = items.value.indexOf(row)
    const raw = JSON.parse(JSON.stringify(items.value))

    raw.splice(index, 1)

    items.value = raw
}

function addItem(payload: any) {
    const price = payload.price as ProductPriceSchema

    const alreadyAdded = items.value.some(p => p.product_id === price.product_id)

    if (alreadyAdded) {
        toast.error('Product alread added')
        throw new Error('Product alread added')
    }

    const raw = JSON.parse(JSON.stringify(items.value))

    raw.push({
        unit_amount: price.amount,
        price_id: price.id,
        product_id: price.product_id,
        product: price.product,
        currency: price.currency,
        quantity: 1
    })

    items.value = raw
}
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                {{ $t('Items') }}
            </CardTitle>
            <CardDescription>
                {{ $t('Order items') }}
            </CardDescription>
            <CardAction>
                <DialogForm
                    :fields="fields"
                    :handle="addItem"
                >
                    <ZButton type="button">
                        {{ $t('Add') }}
                    </ZButton>
                </DialogForm>
            </CardAction>
        </CardHeader>
        <CardContent>
            <ZDataTable
                :rows="items"
                :columns="columns"
                disable-sort
            >
                <template #row-quantity="{ row }">
                    <input
                        type="number"
                        :value="row.quantity"
                        class="bg-muted ring-0 focus:ring-0 p-2"
                        @keydown.enter.prevent="updateRow(row, { quantity: Number(($event.target as any).value) })"
                        @change="updateRow(row, { quantity: Number(($event.target as any).value) })"
                    >
                </template>
                <template #row-actions="{ row }">
                    <div class="flex justify-end">
                        <ZButton
                            variant="ghost"
                            size="icon"
                            @click="remove(row)"
                        >
                            <Icon name="Trash" /> 
                        </ZButton>
                    </div>
                </template>
            </ZDataTable>
        </CardContent>
    </Card>
</template>
