<script setup lang="ts">
import { computed, onMounted, ref, } from 'vue'
import { route, router, toast, useValibotForm, fetcher, useRouteQuery } from '@sidekick-coder/zenith-kit/client'
import Card from '#client/components/ui/card/Card.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import CardFooter from '#client/components/ui/card/CardFooter.vue'
import Tabs from '#client/components/ui/tabs/Tabs.vue'
import { TabsContent, TabsList, TabsTrigger } from '#client/components/ui/tabs/index.ts'
import FormTextField from '#client/components/FormTextField.vue'
import FormTextarea from '#client/components/FormTextarea.vue'
import Button from '#client/components/Button.vue'
import ProductMetasTable from '#zpayments/client/components/ProductMetasTable.vue'
import ProductPricesTable from '#zpayments/client/components/ProductPricesTable.vue'
import type Product from '#zpayments/shared/entities/product.entity.ts'
import TextField from '#client/components/TextField.vue'
import { productSchema } from '#zpayments/shared/schemas/index.ts'

const id = computed(() => route.params.id as string)

const product = ref<Product | null>(null)
const saving = ref(false)

const { handleSubmit, setValues } = useValibotForm(productSchema.update())

async function loadProduct() {
    const [error, response] = await fetcher.try(`/api/zpayments/products/${id.value}`, {
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

onMounted(loadProduct)

const tab = useRouteQuery('tab', 'prices')

const onSubmit = handleSubmit(async (data) => {
    saving.value = true

    const [error] = await fetcher.try(`/api/zpayments/products/${id.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        data
    })

    if (error) {
        saving.value = false
        return
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    toast.success($t('Updated successfully.'))
    saving.value = false
    await loadProduct()
})
</script>

<template>
    <div class="zp:flex zp:[&>*]:px-4 -mx-2">
        <div class="zp:w-full zp:lg:w-3/12 zp:min-h-full zp:rounded-none zp:shadow-none zp:gap-y-6 zp:flex zp:flex-col">
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
                            :model-value="$d(product.created_at)"
                            readonly
                        />

                        <TextField
                            :label="$t('Updated At')"
                            :model-value="$d(product.updated_at)"
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

        <div class="flex-1 flex flex-col zp:gap-y-6">
            <ProductPricesTable :product-id="id" />
            <ProductMetasTable :product-id="id" />
        </div>
    </div>
</template>
