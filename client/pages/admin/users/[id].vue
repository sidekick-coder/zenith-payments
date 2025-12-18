<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
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
import { $fetch } from '#client/utils/fetcher.ts'
import TextField from '#client/components/TextField.vue'
import type User from '#shared/entities/user.entity.ts'
import UserOrdersTable from '#zpayments/client/components/UserOrdersTable.vue'
import UserPaymentsTable from '#zpayments/client/components/UserPaymentsTable.vue'

const route = useRoute()
const router = useRouter()
const id = computed(() => route.params.id as string)

const user = ref<User | null>(null)
const saving = ref(false)

async function load() {
    const [error, response] = await $fetch.try(`/api/users/${id.value}`, {
        method: 'GET'
    })

    if (error) {
        return
    }

    user.value = response
}

onMounted(load)

const tab = computed({
    get: () => (route.query.tab as string) || 'orders',
    set: (value: string) => {
        router.replace({
            path: route.path,
            query: {
                tab: value
            }
        })
    }
})
</script>

<template>
    <AppLayout>
        <div class="flex min-h-full w-full [&>*]:px-4 -mx-2">
            <div class="w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col">
                <Card>
                    <CardHeader>
                        <CardTitle>{{ $t('Details') }}</CardTitle>
                        <CardDescription>{{ $t('Customer information') }}</CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <TextField
                            label="ID"
                            :model-value="user?.id"
                            readonly
                        />
                        <TextField
                            :label="$t('Name')"
                            :model-value="user?.name"
                            readonly
                        />
                        <TextField
                            :label="$t('Email')"
                            :model-value="user?.email"
                            readonly
                        />
                    </CardContent>
                </Card>
            </div>
            
            <div class="flex-1 flex flex-col">
                <Tabs
                    v-if="user"
                    v-model="tab"
                >
                    <TabsList>
                        <TabsTrigger value="orders">
                            {{ $t('Orders') }}
                        </TabsTrigger>
                        <TabsTrigger value="payments">
                            {{ $t('Payments') }}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="orders">
                        <UserOrdersTable :user-id="user.id" />
                    </TabsContent>

                    <TabsContent value="payments">
                        <UserPaymentsTable :user-id="user.id" />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </AppLayout>
</template>
