<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import GatewayLayout from '#zpayments/client/layouts/GatewayLayout.vue'
import Card from '#client/components/ui/card/Card.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import CardFooter from '#client/components/ui/card/CardFooter.vue'
import Button from '#client/components/Button.vue'
import { $t } from '#shared/lang.ts'
import { $fetch } from '#client/utils/fetcher.ts'
import type GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'
import FormAutoFieldList from '#client/components/FormAutoFieldList.vue'

const route = useRoute()
const id = computed(() => route.params.id as string)

const original = ref<GatewayConfig>()
const saving = ref(false)

const { handleSubmit, setValues } = useForm()

async function submitConfig(data: Record<string, any>) {
    saving.value = true

    const [error] = await $fetch.try(`/api/zpayments/gateways/${id.value}`, {
        method: 'PUT',
        data: {
            config: data
        }
    })

    if (error) {
        saving.value = false
        return
    }

    if (original.value) {
        original.value.config = data
    }

    toast.success($t('Updated successfully.'))
    saving.value = false
}

const onSubmit = handleSubmit(submitConfig)

watch(original, () => {
    setValues(original.value?.config || {})
})
</script>

<template>
    <GatewayLayout v-model:gateway="original">
        <form @submit.prevent="onSubmit">
            <Card v-if="original">
                <CardHeader>
                    <CardTitle>{{ $t('Gateway Configuration') }}</CardTitle>
                    <CardDescription>{{ $t('Edit gateway-specific configuration') }}</CardDescription>
                </CardHeader>

                <CardContent class="space-y-4">
                    <FormAutoFieldList :fields="original.configFields" />
                </CardContent>

                <CardFooter class="flex justify-end">
                    <Button
                        type="submit"
                        :loading="saving"
                    >
                        {{ $t('Save') }}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    </GatewayLayout>
</template>

