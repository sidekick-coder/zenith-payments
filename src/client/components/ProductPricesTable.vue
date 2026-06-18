<script setup lang="ts">
import { onMounted, onServerPrefetch, ref } from 'vue'
import { ZDataTable } from '@sidekick-coder/zenith-kit/components'
import ProductPrice from '#zpayments/shared/entities/productPrice.entity.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@sidekick-coder/zenith-kit/components'
import schemas from '#zpayments/shared/validators/index.ts'
import countries from '#zpayments/shared/data/countries.json'
import currencies from '#zpayments/shared/data/currencies.json'
import { useFetchPagination, defineColumns } from '@sidekick-coder/zenith-kit/client'

const props = defineProps({
    productId: {
        type: String,
        required: true
    }
})

const deletingItems = ref<number[]>([])

const { items, load, loading, hydrate } = useFetchPagination<ProductPrice>(`/api/zpayments/products/${props.productId}/prices`, {
    limit: 100,
    serialize: item => ProductPrice.from(item)
})

const columns = defineColumns<ProductPrice>([
    {
        id: 'id',
        label: 'ID',
        field: 'id',
        width: 50,
    },
    {
        id: 'gateway_id',
        label: $t('Gateway'),
        field: 'gateway_id',
    },
    {
        id: 'country',
        label: $t('Country'),
        field: 'country',
        width: 100,
    },
    {
        id: 'amount',
        label: $t('Amount'),
        field: 'amountFormatted',
    },
    {
        id: 'actions',
        width: 200
    }
])

const fields = defineFormFields({
    gateway_id: {
        component: 'select',
        label: $t('Gateway ID'),
        fetch: '/api/zpayments/gateways',
        labelKey: 'name',
        valueKey: 'id',
    },
    country: {
        component: 'autocomplete',
        label: $t('Country'),
        options: countries,
        labelKey: 'name',
        valueKey: 'code',
        clearable: true,
    },
    currency: {
        component: 'autocomplete',
        label: $t('Currency'),
        labelKey: 'label',
        valueKey: 'code',
        options: currencies,
        clearable: true,
    },
    amount: {
        component: 'text-field',
        label: $t('Amount'),
        hint: $t('Amount in cents (e.g. $10 = 1000)'),
        type: 'number',
    },
})



onMounted(hydrate)
onServerPrefetch(hydrate)
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                {{ $t('Prices') }}
            </CardTitle>
            <CardDEscription>
                {{ $t('Manage the prices for this product') }}
            </CardDEscription>
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
            <ZDataTable
                :loading="loading"
                :columns="columns"
                :rows="items"
            >
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <DialogForm
                            :fetch="`/api/zpayments/products/${productId}/prices/${row.id}`"
                            :title="$t('Edit Price')"
                            :description="$t('Fill in the details below to edit the price')"
                            :schema="schemas.productPrice.update"
                            :values="row"
                            :fields="fields"
                            method="PATCH"
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
            </ZDatatable>
        </CardContent>
    </Card>
</template>
