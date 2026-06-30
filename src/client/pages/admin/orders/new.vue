<script setup lang="ts">
import { orderSchema } from '#zpayments/shared/schemas/orderSchema.ts';
import { fetcher, router, useForm } from '@sidekick-coder/zenith-kit/client';
import {
    ZButton,
    PageTitle,
    PageSubtitle,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    FormTextField,
    FormAutocomplete
} from '@sidekick-coder/zenith-kit/components';
import OrderNewItems from '#zpayments/client/components/OrderNewItems.vue';
import { computed, ref } from 'vue';
import { formatAmount } from '#zpayments/client/utils/formatAmount.ts';

const saving = ref(false)
const { handleSubmit, values, setFieldValue } = useForm(orderSchema.create())

const currency = computed(() => {
    if (!values.items?.length) return

    return values.items[0].currency
});


const total = computed(() => {
    let total = 0

    if (!values.items) return 0

    values.items.forEach(i => {
        if (i.unit_amount && i.quantity) {
            total += i.unit_amount * i.quantity
        }
    })

    return total
});

const onSubmit = handleSubmit(async (data) => {
    saving.value = false

    const [error] = await fetcher.try('/api/zpayments/orders', {
        method: 'POST',
        data
    })

    if (error) {
        saving.value = false
        return
    }

    await new Promise(resolve => setTimeout(resolve, 800))

    saving.value = false
    router.push('/admin/zpayments/orders')
});

</script>

<template>
    <form
        @submit.prevent="onSubmit"
        class="flex flex-col gap-4"
    >
        <div class="flex items-center">
            <div class="flex-1">
                <PageTitle>
                    {{ $t('New Order') }}
                </PageTitle>
                <PageSubtitle>
                    {{ $t('Fill in the details to create a new order') }}
                </PageSubtitle>
            </div>
            <div class="flex items-center justify-end gap-2">
                <ZButton
                    type="submit"
                    :loading="saving"
                >
                    {{ $t('Create') }}
                </ZButton>
            </div>
        </div>
        <Card>
            <CardContent>
                {{ $t('Total') }}: {{ currency ? formatAmount(total, currency) : total }}
            </cardcontent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>
                    {{ $t('Details') }}
                </CardTitle>
                <CardDescription>
                    {{ $t('Select a user from the list') }}
                </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-4">
                <FormTextField
                    name="purpose"
                    :label="$t('Purpose')"
                />
                <FormAutocomplete
                    name="user_id"
                    value-key="id"
                    label-key="name"
                    subtitle-key="email"
                    fetch="/api/users"
                    :label="$t('User')"
                />
            </cardcontent>
        </Card>

        <OrderNewItems
            :items="values.items"
            @update:items="v => setFieldValue('items', v)"
        />
    </form>
</template>
