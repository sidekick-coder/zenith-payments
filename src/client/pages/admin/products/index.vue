<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
    defineFormFields,
    DialogForm,
    ZAlertButton,
    ZButton,
    Icon,
    Button,
    DataTable,
    PageTitle,
    PageSubtitle,
} from '@sidekick-coder/zenith-kit/components'
import { fetcher, defineColumns } from '@sidekick-coder/zenith-kit/client'
import type { ProductSchema } from '#zpayments/shared/schemas/productSchema.ts'

const rows = ref<ProductSchema[]>([])
const loading = ref(false)

const columns = defineColumns<ProductSchema>([
    {
        id: 'id',
        label: $t('ID'),
        field: 'id',
        width: 80
    },
    {
        id: 'name',
        label: $t('Name'),
        field: 'name',
    },
    { id: 'actions' },
])

const fields = defineFormFields({
    name: {
        component: 'text-field',
        label: $t('Name'),
    },
})

async function load() {
    loading.value = true

    const [error, response] = await fetcher.try(
        '/api/zpayments/products',
        { method: 'GET' }
    )

    if (error) {
        loading.value = false
        return
    }

    rows.value = response.items || []

    await new Promise(resolve => setTimeout(resolve, 300))

    loading.value = false
}

onMounted(load)
</script>

<template>
    <div class="flex items-center justify-between mb-6">
        <div>
            <PageTitle class="text-">
                {{ $t('Products') }}
            </PageTitle>
            <PageSubtitle>
                {{ $t('Manage your products') }}
            </PageSubtitle>
        </div>
        <div class="flex items-center gap-2">
            <DialogForm
                :title="$t('Add new')"
                :fields="fields"
                fetch="/api/zpayments/products"
                fetch-method="POST"
                @submit="load"
            >
                <Button>
                    {{ $t('Add new') }}
                </Button>
            </DialogForm>

            <Button
                variant="outline"
                @click="load"
            >
                <Icon
                    name="refreshCw"
                    :class="{ 'animate-spin': loading }"
                />
            </Button>
        </div>
    </div>

    <DataTable
        :rows="rows"
        :columns="columns"
        :loading="loading"
    >
        <template #row-actions="{ row }">
            <div class="flex items-center gap-2 justify-end">
                <ZButton
                    variant="ghost"
                    size="sm"
                    :to="`/admin/zpayments/products/${row.id}`"
                >
                    <Icon name="Edit" />
                </ZButton>


                <ZAlertButton
                    variant="ghost"
                    size="sm"
                    fetch-method="DELETE"
                    :fetch="`/api/zpayments/products/${row.id}`"
                    :toast-on-success="$t('Deleted successfully')"
                    @fetched="load"
                >
                    <Icon name="trash" />
                </ZAlertButton>
            </div>
        </template>
    </DataTable>
</template>
