<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import AppLayout from '#client/layouts/AppLayout.vue'
import Card from '#client/components/ui/card/Card.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import CardFooter from '#client/components/ui/card/CardFooter.vue'
import Tabs from '#client/components/ui/tabs/Tabs.vue'
import { TabsContent, TabsList, TabsTrigger } from '#client/components/ui/tabs'
import FormTextField from '#client/components/FormTextField.vue'
import FormSelect from '#client/components/FormSelect.vue'
import FormTextarea from '#client/components/FormTextarea.vue'
import Button from '#client/components/Button.vue'
import PlanGatewayLinks from '#zpayments/client/components/PlanGatewayLinks.vue'
import { $t } from '#shared/lang.ts'
import { $fetch } from '#client/utils/fetcher.ts'
import type Plan from '#zpayments/shared/entities/plan.entity.ts'

const route = useRoute()
const router = useRouter()
const id = computed(() => route.params.id as string)

const plan = ref<Plan | null>(null)
const gateways = ref<any[]>([])
const saving = ref(false)

const statusOptions = [
    {
        label: $t('Active'),
        value: 'active'
    },
    {
        label: $t('Inactive'),
        value: 'inactive'
    },
    {
        label: $t('Archived'),
        value: 'archived'
    }
]

const schema = v.object({
    name: v.pipe(v.string(), v.minLength(2, $t('Name is required'))),
    description: v.optional(v.string()),
    amount: v.pipe(v.number(), v.minValue(0, $t('Amount must be positive'))),
    status: v.picklist(['active', 'inactive', 'archived'])
})

const { handleSubmit, setValues } = useForm({
    validationSchema: toTypedSchema(schema)
})

async function loadPlan() {
    const [error, response] = await $fetch.try(`/api/zpayments/plans/${id.value}`, {
        method: 'GET'
    })

    if (error) {
        console.error('Failed to load plan:', id.value)
        console.error(error)
        return
    }

    plan.value = response
    setValues({
        name: response.name,
        description: response.description || '',
        amount: response.amount,
        status: response.status
    })
}

async function loadGateways() {
    const [error, response] = await $fetch.try('/api/zpayments/gateways', {
        method: 'GET'
    })

    if (error) {
        console.error('Failed to load gateways')
        console.error(error)
        return
    }

    gateways.value = response.items || []
}

await loadPlan()
await loadGateways()

const tab = computed({
    get: () => (route.query.tab as string) || 'gateway-links',
    set: (value: string) => {
        router.replace({
            path: route.path,
            query: {
                tab: value
            }
        })
    }
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

const onSubmit = handleSubmit(async (formValues) => {
    saving.value = true

    const [error] = await $fetch.try(`/api/zpayments/plans/${id.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues)
    })

    if (error) {
        console.error('Failed to save plan:', error)
        toast.error($t('Failed to update.'))
        saving.value = false
        return
    }

    toast.success($t('Updated successfully.'))
    saving.value = false
    await loadPlan()
})
</script>

<template>
    <AppLayout>
        <div class="flex min-h-full w-full [&>*]:px-4 -mx-2">
            <div class="w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col">
                <form
                    v-if="plan"
                    @submit.prevent="onSubmit"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>{{ $t('Plan Details') }}</CardTitle>
                            <CardDescription>{{ $t('Edit plan information') }}</CardDescription>
                        </CardHeader>
                        <CardContent class="space-y-6">
                            <FormTextField
                                name="name"
                                :label="$t('Name')"
                            />

                            <FormTextarea
                                name="description"
                                :label="$t('Description')"
                            />

                            <FormTextField
                                name="amount"
                                type="number"
                                :label="$t('Amount :0', [$t('in cents')])"
                            />

                            <FormSelect
                                name="status"
                                :label="$t('Status')"
                                :options="statusOptions"
                            />

                            <div>
                                <div class="text-sm font-medium text-muted-foreground">
                                    {{ $t('Created At') }}
                                </div>
                                <div class="text-base">
                                    {{ formatDate(plan.created_at) }}
                                </div>
                            </div>

                            <div>
                                <div class="text-sm font-medium text-muted-foreground">
                                    {{ $t('Updated At') }}
                                </div>
                                <div class="text-base">
                                    {{ formatDate(plan.updated_at) }}
                                </div>
                            </div>
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
            </div>
            
            <div class="flex-1 flex flex-col">
                <Tabs
                    v-model="tab"
                    default-value="gateway-links"
                >
                    <TabsList>
                        <TabsTrigger value="gateway-links">
                            {{ $t('Gateway Links') }}
                        </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="gateway-links">
                        <PlanGatewayLinks
                            :plan-id="id"
                            :gateways="gateways"
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </AppLayout>
</template>
