<script setup lang="ts">
import { format } from 'date-fns'
import { defineColumns } from '#client/components/DataTable.vue'
import PageCrud from '#client/components/PageCrud.vue'
import AdminLayout from '#client/layouts/AdminLayout.vue'
import User from '#shared/entities/user.entity.ts'

const columns = defineColumns([
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
        id: 'username',
        label: $t('Username'),
        field: 'username',
    },
    {
        id: 'email',
        label: 'Email',
        field: 'email',
    },
    { id: 'actions' }
])

</script>

<template>
    <AdminLayout>
        <PageCrud
            :title="$t('Customers')"
            :description="$t('View customer records here.')"
            :columns="columns"
            :serialize="row => User.from(row)"
            :actions="[]"
            view-to="/admin/zpayments/users/:id"
            fetch="/api/users"
        />
    </AdminLayout>
</template>
