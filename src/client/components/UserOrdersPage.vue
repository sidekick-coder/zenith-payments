<script setup lang="ts">
import type { ComponentExposed } from 'vue-component-type-helpers'
import { ref } from 'vue'
import UserOrdersTable from './UserOrdersTable.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardAction } from '#client/components/ui/card/index.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import PageTitle from '#client/components/PageTitle.vue'
import PageSubtitle from '#client/components/PageSubtitle.vue'

const props = defineProps({
    userId: {
        type: Number,
        required: true,
    },
})

const tableRef = ref<ComponentExposed<typeof UserOrdersTable>>()
const loading = defineModel('loading', {
    type: Boolean,
    default: false,
})

function load() {
    return tableRef.value?.load()   
}

</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="flex items-center">
            <div class="flex-1">
                <PageTitle>{{ $t('Orders') }}</PageTitle>
                <PageSubtitle>{{ $t('List of orders') }}</PageSubtitle>
            </div>
            <div>
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
            </div>
        </div>

        <UserOrdersTable
            ref="tableRef"
            v-model:loading="loading"
            :user-id="props.userId"
        />
    </div>
</template>
