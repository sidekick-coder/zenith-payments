<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import ProductMeta from '#zpayments/shared/entities/productMeta.entity.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '#client/components/ui/card/index.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import type { Meta, ProductMetaSchema } from '#zpayments/shared/schemas/productMetaSchema.ts'
import { fetcher, toast } from '@sidekick-coder/zenith-kit/client'

const props = defineProps({
    productId: {
        type: String,
        required: true
    }
})

const loading = ref(false)
const saving = ref(false)
const rows = ref<Meta[]>([])
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
        id: 'actions',
        width: 200
    }
])

async function load() {
    loading.value = true

    const [error, response] = await fetcher.try(`/api/zpayments/products/${props.productId}/metas`)

    loading.value = false

    if (error) {
        return
    }

    rows.value = Object.entries(response).map(([key, value]) => ({
        name: key,
        value: value as string,
    }))
}

async function save(data: Record<string, string>) {
    saving.value = true

    const [error] = await fetcher.try(`/api/zpayments/products/${props.productId}/metas`, {
        method: 'PUT',
        data
    })

    if (error) {
        saving.value = false
        return
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    rows.value = Object.entries(data).map(([key, value]) => ({
        name: key,
        value: value as string,
    }))

    toast.success($t('Updated successfully.'))

    saving.value = false
}

function create(payload: Meta) {
    const existing = rows.value.find(row => row.name === payload.name)

    if (existing) {
        const error = new Error($t('A meta with this name already exists. Please choose a different name.'))

        toast.error(error.message)

        throw error
    }

    const data = Object.fromEntries(rows.value.map(row => [row.name, row.value]))

    data[payload.name] = payload.value

    save(data)
}

function update(name: string, payload: Meta) {
    const data = Object.fromEntries(rows.value.map(row => [row.name, row.value]))

    if (name !== payload.name) {
        delete data[name]
    }

    data[payload.name] = payload.value

    save(data)
}

function remove(name: string) {
    const data = Object.fromEntries(rows.value.map(row => [row.name, row.value]))

    delete data[name]

    save(data)
}

onMounted(load)

defineExpose({
    load
})
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                {{ $t('Metas') }}
            </CardTitle>
            <CardDescription>
                {{ $t('Manage the metas for this product.') }}
            </CardDescription>
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
                    :title="$t('Add Meta')"
                    :description="$t('Fill in the details below to add a new meta')"
                    :schema="schemas.productMeta.create"
                    :fields="fields"
                    :handle="create"
                >
                    <Button>
                        {{ $t('Add Meta') }}
                    </Button>
                </DialogForm>
            </CardAction>
        </CardHeader>

        <CardContent>
            <DataTable
                v-model:loading="loading"
                :columns="columns"
                :rows="rows"
                hide-pagination
            >
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <DialogForm
                            :fetch="`/api/zpayments/products/${productId}/metas/${row.id}`"
                            :title="$t('Edit Meta')"
                            :description="$t('Fill in the details below to edit the meta')"
                            :values="row"
                            :handle="(data: Meta) => update(row.name, data)"
                            :fields="fields"
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
                            @confirm="remove(row.name)"
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
