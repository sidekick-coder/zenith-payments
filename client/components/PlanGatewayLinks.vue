<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import Card from '#client/components/ui/card/Card.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import Button from '#client/components/Button.vue'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '#client/components/ui/dialog'
import FormSelect from '#client/components/FormSelect.vue'
import Icon from '#client/components/Icon.vue'
import { $t } from '#shared/lang.ts'
import { $fetch } from '#client/utils/fetcher.ts'

const props = defineProps<{
    planId: string
    gateways: any[]
}>()

const emit = defineEmits<{
    refresh: []
}>()

const gatewayEntities = ref<any[]>([])
const loading = ref(false)
const saving = ref(false)
const dialogOpen = ref(false)

const gatewayOptions = ref(
    props.gateways.map(g => ({
        label: g.name || g.id,
        value: g.id
    }))
)

const schema = v.object({
    gateway: v.pipe(v.string(), v.minLength(1, $t('Gateway is required')))
})

const { handleSubmit, resetForm } = useForm({
    validationSchema: toTypedSchema(schema)
})

async function loadGatewayEntities() {
    loading.value = true

    const [error, response] = await $fetch.try(`/api/zpayments/plans/${props.planId}/links`, {
        method: 'GET'
    })

    if (error) {
        console.error('Failed to load gateway entities')
        console.error(error)
        loading.value = false
        return
    }

    gatewayEntities.value = response.items || []
    loading.value = false
}

const onSubmit = handleSubmit(async (formValues) => {
    saving.value = true

    const [error] = await $fetch.try(`/api/zpayments/plans/${props.planId}/links`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues)
    })

    if (error) {
        console.error('Failed to link gateway:', error)
        saving.value = false
        return
    }

    toast.success($t('Gateway linked successfully.'))
    saving.value = false
    dialogOpen.value = false
    resetForm()
    await loadGatewayEntities()
    emit('refresh')
})

const formatDate = (date: string | Date | null) => {
    if (!date) {
        return $t('N/A')
    }

    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'short'
    }).format(new Date(date))
}

loadGatewayEntities()
</script>

<template>
    <Card>
        <CardHeader>
            <div class="flex items-center justify-between">
                <div>
                    <CardTitle>{{ $t('Linked Gateways') }}</CardTitle>
                    <CardDescription>{{ $t('Payment gateways linked to this plan') }}</CardDescription>
                </div>
                <Dialog v-model:open="dialogOpen">
                    <DialogTrigger as-child>
                        <Button variant="outline">
                            <Icon
                                name="Plus"
                                class="size-4 mr-2"
                            />
                            {{ $t('Link Gateway') }}
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <form @submit.prevent="onSubmit">
                            <DialogHeader>
                                <DialogTitle>{{ $t('Link Gateway') }}</DialogTitle>
                                <DialogDescription>
                                    {{ $t('Select a gateway to link to this plan') }}
                                </DialogDescription>
                            </DialogHeader>
                            <div class="py-4">
                                <FormSelect
                                    name="gateway"
                                    :label="$t('Gateway')"
                                    :options="gatewayOptions"
                                />
                            </div>
                            <DialogFooter>
                                <Button
                                    type="submit"
                                    :loading="saving"
                                >
                                    {{ $t('Link') }}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </CardHeader>
        <CardContent>
            <div
                v-if="loading"
                class="text-center text-muted-foreground py-8"
            >
                {{ $t('Loading...') }}
            </div>
            <div
                v-else-if="gatewayEntities.length === 0"
                class="text-center text-muted-foreground py-8"
            >
                {{ $t('No gateway links found') }}
            </div>
            <div
                v-else
                class="space-y-4"
            >
                <div
                    v-for="entity in gatewayEntities"
                    :key="entity.id"
                    class="border rounded-lg p-4"
                >
                    <div class="space-y-2">
                        <div>
                            <div class="text-sm font-medium text-muted-foreground">
                                {{ $t('Gateway') }}
                            </div>
                            <div class="text-base">
                                {{ entity.gateway }}
                            </div>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-muted-foreground">
                                {{ $t('External ID') }}
                            </div>
                            <div class="text-base font-mono text-sm">
                                {{ entity.entity_id }}
                            </div>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-muted-foreground">
                                {{ $t('Created At') }}
                            </div>
                            <div class="text-base">
                                {{ formatDate(entity.created_at) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>
