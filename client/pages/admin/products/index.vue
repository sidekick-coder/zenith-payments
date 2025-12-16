<script setup lang="ts">
import { defineColumns } from '#client/components/DataTable.vue'
import { defineFormFields } from '#client/components/DialogForm.vue'
import PageCrud from '#client/components/PageCrud.vue'
import  AppLayout from '#client/layouts/AppLayout.vue'

const fields = defineFormFields({
    name: {
        component: 'text-field',
        label: $t('Name'),
    },
    amount: {
        component: 'text-field',
        label: $t('Amount'),
        type: 'number',
    },
})

const columns = defineColumns([
    {
        id: 'id',
        label: $t('ID'),
        field: 'id',
    },
    {
        id: 'name',
        label: $t('Name'),
        field: 'name',
    },
    {
        id: 'amount',
        label: $t('Amount'),
        field: 'amount',
    },
    { id: 'actions' }
])

</script>

<template>
    <AppLayout>
        <PageCrud
            :title="$t('Products')"
            :description="$t('Manage your products here.')"
            :fields="fields"
            :columns="columns"
            fetch="/api/zpayments/products"
        />
    </AppLayout>
</template>