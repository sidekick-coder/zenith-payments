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
import FormTextarea from '#client/components/FormTextarea.vue'
import Button from '#client/components/Button.vue'
import ProductMetasTable from '#zpayments/client/components/ProductMetasTable.vue'
import ProductPricesTable from '#zpayments/client/components/ProductPricesTable.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import type Product from '#zpayments/shared/entities/product.entity.ts'
import TextField from '#client/components/TextField.vue'

const route = useRoute()
const router = useRouter()
const id = computed(() => route.params.id as string)

const product = ref<Product | null>(null)
const saving = ref(false)

const schema = v.object({
    name: v.pipe(v.string(), v.minLength(2, $t('Name is required'))),
    description: v.optional(v.string()),
})

const { handleSubmit, setValues } = useForm({
    validationSchema: toTypedSchema(schema)
})

async function loadProduct() {
    const [error, response] = await $fetch.try(`/api/zpayments/products/${id.value}`, {
        method: 'GET'
    })

    if (error) {
        console.error('Failed to load product:', id.value)
        console.error(error)
        return
    }

    product.value = response

    setValues({
        name: response.name,
        description: response.description || '',
    })
}

await loadProduct()

const tab = computed({
    get: () => (route.query.tab as string) || 'prices',
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

    const [error] = await $fetch.try(`/api/zpayments/products/${id.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues)
    })

    if (error) {
        console.error('Failed to save product:', error)
        toast.error($t('Failed to update.'))
        saving.value = false
        return
    }

    toast.success($t('Updated successfully.'))
    saving.value = false
    await loadProduct()
})
</script>

<template>
    <AppLayout>
        <div class="flex min-h-full w-full [&>*]:px-4 -mx-2">
            <div class="w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col">
                <form
                    v-if="product"
                    @submit.prevent="onSubmit"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>{{ $t('Product Details') }}</CardTitle>
                            <CardDescription>{{ $t('Edit product information') }}</CardDescription>
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

                            <TextField
                                :label="$t('Created At')"
                                :model-value="formatDate(product.created_at)"
                                readonly
                            />

                            <TextField
                                :label="$t('Updated At')"
                                :model-value="formatDate(product.updated_at)"
                                readonly
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
            </div>
            
            <div class="flex-1 flex flex-col">
                <Tabs
                    v-model="tab"
                    default-value="prices"
                >
                    <TabsList>
                        <TabsTrigger value="prices">
                            {{ $t('Prices') }}
                        </TabsTrigger>
                        <TabsTrigger value="metas">
                            {{ $t('Metas') }}
                        </TabsTrigger>
                        <TabsTrigger value="payments">
                            {{ $t('Payments') }}
                        </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="prices">
                        <ProductPricesTable :product-id="id" />
                    </TabsContent>

                    <TabsContent value="metas">
                        <ProductMetasTable :product-id="id" />
                    </TabsContent>

                    <TabsContent value="payments">
                        <Card>
                            <CardContent class="py-8 text-center text-muted-foreground">
                                {{ $t('Payments feature coming soon') }}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </AppLayout>
</template>
