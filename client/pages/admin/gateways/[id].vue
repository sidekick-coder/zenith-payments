<script setup lang="ts">
import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import { useRouteQuery } from '@vueuse/router'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import AppLayout from '#client/layouts/AppLayout.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#client/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#client/components/ui/tabs'
import { Skeleton } from '#client/components/ui/skeleton'
import PageTitle from '#client/components/PageTitle.vue'
import PageSubtitle from '#client/components/PageSubtitle.vue'
import FormTextField from '#client/components/FormTextField.vue'
import Button from '#client/components/Button.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import { $t } from '#shared/lang'
import GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'
import schemas from '#zpayments/shared/validators/index.ts'

const route = useRoute()
const gatewayId = computed(() => route.params.id as string)

const gateway = ref<GatewayConfig>()
const loading = ref(true)
const savingDetails = ref(false)
const tab = useRouteQuery('tab', 'config')

const tabs = [
    {
        id: 'config',
        label: $t('Configuration'),
        component: defineAsyncComponent(() => import('#zpayments/client/components/GatewayConfig.vue')),
    },
    {
        id: 'customers',
        label: $t('Customers'),
        component: defineAsyncComponent(() => import('#zpayments/client/components/GatewayCustomers.vue')),
    },
    {
        id: 'subscriptions',
        label: $t('Subscriptions'),
        component: defineAsyncComponent(() => import('#zpayments/client/components/GatewaySubscriptions.vue')),
    }
]

// Details form
const { handleSubmit: handleDetailsSubmit, setValues: setDetailsValues } = useForm({
    validationSchema: toTypedSchema(schemas.gateway.update)
})

async function loadGateway() {
    loading.value = true
    
    const [error, response] = await tryCatch(() => $fetch(`/api/zpayments/gateways/${gatewayId.value}`, { method: 'GET' }))

    if (error) {
        console.error('Failed to load gateway:', error)
        loading.value = false
        return
    }

    gateway.value = GatewayConfig.from(response)
    
    // Set form values
    setDetailsValues({
        name: response?.name || '',
        description: response?.description || ''
    })
    
    setTimeout(() => {
        loading.value = false
    }, 500)
}

const onDetailsSubmit = handleDetailsSubmit(async (data) => {
    savingDetails.value = true

    const [error] = await $fetch.try(`/api/zpayments/gateways/${gatewayId.value}`, {
        method: 'PUT',
        data
    })

    if (error) {
        savingDetails.value = false
        return
    }

    if (gateway.value) {
        gateway.value.name = data.name!
        gateway.value.description = data.description!
    }

    setTimeout(() => {
        toast.success($t('Updated successfully.'))
        savingDetails.value = false
    }, 500)
})

onMounted(loadGateway)
</script>

<template>
    <AppLayout
        :breadcrumbs="[
            { label: $t('Gateways'), to: '/admin/gateways' },
            { label: gateway?.name || '...' }
        ]"
    >
        <div
            v-if="loading"
            class="flex flex-col space-y-3"
        >
            <Skeleton class="h-[125px] w- rounded-xl" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[80%]" />
                <Skeleton class="h-4 w-[60%]" />
            </div>
        </div>

        <div
            v-else
            class="flex flex-wrap [&>*]:px-4 gap-y-4 -mx-4"
        >
            <div class="w-full flex items-center justify-between">
                <div>
                    <PageTitle>
                        {{ $t('Edit Gateway') }}
                    </PageTitle>
                    <PageSubtitle>
                        {{ $t('Update the gateway information below') }}
                    </PageSubtitle>
                </div>
            </div>

            <div class="w-full xl:w-4/12 2xl:w-3/12 flex flex-col space-y-6">
                <Card v-if="gateway">
                    <CardHeader>
                        <CardTitle>
                            {{ $t('Details') }}
                        </CardTitle>
                        <CardDescription>
                            {{ $t('Gateway general information') }}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            class="space-y-4 w-full"
                            @submit.prevent="onDetailsSubmit"
                        >
                            <FormTextField
                                name="name"
                                :label="$t('Name')"
                            />
                            
                            <FormTextField
                                name="description"
                                :label="$t('Description')"
                            />

                            <div class="flex gap-3 pt-4 justify-end">
                                <Button
                                    type="submit"
                                    :loading="savingDetails"
                                >
                                    {{ $t('Save') }}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <div class="w-full xl:w-8/12 2xl:w-9/12 flex flex-col space-y-6">
                <Tabs
                    v-if="gateway"
                    v-model="tab"
                    class="w-full"
                >
                    <TabsList>
                        <TabsTrigger
                            v-for="t in tabs"
                            :key="t.id"
                            :value="t.id"
                        >
                            {{ t.label }}
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent
                        v-for="t in tabs"
                        :key="t.id"
                        :value="t.id"
                    >
                        <component
                            :is="t.component"
                            :gateway="gateway"
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </AppLayout>
</template>
