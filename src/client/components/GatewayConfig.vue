<script setup lang="ts">
import { ref, watch } from 'vue'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '#client/components/ui/card'
import FormAutoFieldList from '#client/components/FormAutoFieldList.vue'
import Button from '#client/components/Button.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import type GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'

const props = defineProps<{
    gateway: GatewayConfig
}>()

const savingConfig = ref(false)

const { handleSubmit, setValues } = useForm()

async function submitConfig(data: Record<string, any>) {
    savingConfig.value = true

    const [error] = await $fetch.try(`/api/zpayments/gateways/${props.gateway.id}`, {
        method: 'PUT',
        data: {
            config: data
        }
    })

    if (error) {
        savingConfig.value = false
        return
    }

    setTimeout(() => {
        toast.success($t('Updated successfully.'))
        savingConfig.value = false
    }, 500)
}

const onSubmit = handleSubmit(submitConfig)

watch(() => props.gateway, (newGateway) => {
    if (newGateway) {
        setValues(newGateway.config || {})
    }
}, { immediate: true })
</script>

<template>
    <form @submit.prevent="onSubmit">
        <Card>
            <CardHeader>
                <CardTitle>{{ $t('Gateway Configuration') }}</CardTitle>
                <CardDescription>{{ $t('Edit gateway-specific configuration') }}</CardDescription>
            </CardHeader>

            <CardContent class="space-y-4">
                <FormAutoFieldList :fields="gateway.configFields" />
            </CardContent>

            <CardFooter class="flex justify-end">
                <Button
                    type="submit"
                    :loading="savingConfig"
                >
                    {{ $t('Save') }}
                </Button>
            </CardFooter>
        </Card>
    </form>
</template>
