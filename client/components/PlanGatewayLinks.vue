<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import * as v from 'valibot'
import Card from '#client/components/ui/card/Card.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import Button from '#client/components/Button.vue'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
import Icon from '#client/components/Icon.vue'
import { $t } from '#shared/lang.ts'
import ClientOnly from '#client/components/ClientOnly.vue'

defineProps<{
    planId: string
}>()

const emit = defineEmits<{
    refresh: []
}>()

const tableRef = ref<ComponentExposed<typeof DataTable>>()
const loading = ref(false)

const columns = defineColumns<any>([
    {
        id: 'gateway',
        label: $t('Gateway'),
        field: 'gateway',
    },
    {
        id: 'name',
        label: $t('Name'),
        field: 'name',
    },
    {
        id: 'external_id',
        label: $t('External ID'),
        field: 'external_id',
    },
    {
        id: 'created_at',
        label: $t('Created At'),
        field: row => new Date(row.created_at).toLocaleString(),
    },
])

const fields = defineFormFields({
    gateway: {
        component: 'autocomplete',
        label: $t('Gateway'),
        fetch: '/api/zpayments/gateways',
        labelKey: 'name',
        valueKey: 'id',
    },
    external_id: {
        component: 'text-field',
        label: $t('External ID'),
    },
})

const schema = v.object({
    gateway: v.pipe(v.string(), v.minLength(1, $t('Gateway is required'))),
    external_id: v.pipe(v.string(), v.minLength(1, $t('External ID is required'))),
})

function load() {
    tableRef.value?.load()
    emit('refresh')
}
</script>


<template>
    <Card>
        <CardHeader>
            <div class="flex items-center justify-between">
                <div>
                    <CardTitle>{{ $t('Linked Gateways') }}</CardTitle>
                    <CardDescription>{{ $t('Payment gateways linked to this plan') }}</CardDescription>
                </div>
                <ClientOnly>
                    <DialogForm 
                        :fetch="`/api/zpayments/plans/${planId}/links`"
                        :title="$t('Add new')"
                        :description="$t('Fill in the details below to link a gateway')"
                        :schema="schema"
                        :fields="fields"
                        @submit="load"
                    >
                        <Button>
                            {{ $t('Add new') }}
                        </Button>
                    </DialogForm>
                </ClientOnly>
            </div>
        </CardHeader>
        <CardContent>
            <DataTable
                ref="tableRef"
                v-model:loading="loading"
                :columns="columns"
                :fetch="`/api/zpayments/plans/${planId}/links`"
            />
        </CardContent>
    </Card>
</template>
