<script setup lang="ts">
import { defineColumns } from '#client/components/DataTable.vue'
import { defineFormFields } from '#client/components/DialogForm.vue'
import PageCrud from '#client/components/PageCrud.vue'
import  AdminLayout from '#client/layouts/AdminLayout.vue'

const fields = defineFormFields({
    name: {
        component: 'text-field',
        label: $t('Name'),
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
    { id: 'actions' }
])

</script>

<template>
    <AdminLayout>
        <PageCrud
            :title="$t('Products')"
            :description="$t('Manage your products here.')"
            :fields="fields"
            :columns="columns"
            fetch="/api/zpayments/products"
            view-to="/admin/zpayments/products/:id"
        />
    </AdminLayout>
</template>
