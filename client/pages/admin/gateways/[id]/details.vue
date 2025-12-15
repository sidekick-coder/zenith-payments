<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import GatewayLayout from '#zpayments/client/layouts/GatewayLayout.vue'
import Card from '#client/components/ui/card/Card.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import CardFooter from '#client/components/ui/card/CardFooter.vue'
import FormTextField from '#client/components/FormTextField.vue'
import Button from '#client/components/Button.vue'

import { $fetch } from '#client/utils/fetcher.ts'
import type GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'
import schemas from '#zpayments/shared/validators/index.ts'

const route = useRoute()
const id = computed(() => route.params.id as string)

const original = ref<GatewayConfig>()
const saving = ref(false)

const { handleSubmit, setValues } = useForm({
    validationSchema: toTypedSchema(schemas.gateway.update)
})

async function load() {    
    setValues({
        name: original.value?.name || '',
        description: original.value?.description || ''
    })
}

const onSubmit = handleSubmit(async (data) => {
    saving.value = true

    const [error] = await $fetch.try(`/api/zpayments/gateways/${id.value}`, {
        method: 'PUT',
        data
    })

    if (error) {
        saving.value = false
        return
    }

    if (original.value) {
        original.value.name = data.name!
        original.value.description = data.description!
    }

    toast.success($t('Updated successfully.'))
    saving.value = false
    await load()
})

watch(original, load)
</script>

<template>
    <GatewayLayout v-model:gateway="original">
        <form @submit.prevent="onSubmit">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Gateway') }}</CardTitle>
                    <CardDescription>{{ $t('Edit gateway display name') }}</CardDescription>
                </CardHeader>

                <CardContent class="space-y-4">
                    <FormTextField
                        name="name"
                        :label="$t('Name')"
                    />
                    
                    <FormTextField
                        name="description"
                        :label="$t('Description')"
                    />
                </CardContent>

                <CardFooter class="flex justify-end">
                    <Button
                        type="submit"
                        :loading="saving"
                    >
                        {{ $t('Update') }}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    </GatewayLayout>
</template>