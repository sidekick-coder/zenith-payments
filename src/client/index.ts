import { PluginEntity, authGuard, menu, router, layout } from '@sidekick-coder/zenith-kit/client'
import './assets/css/styles.css'

export default class extends PluginEntity {
    public async load() {
        layout.add('ZPaymentAdminLayout', () => import('./layouts/ZPaymentAdminLayout.vue'))

        router.auto(import.meta.glob<any>('./pages/admin/**/*.vue'), {
            strip: ['pages', 'admin'],
            guards: [authGuard],
            prefix: '/admin/zpayments',
            refine: records => {
                return records.map(record => {
                    record.meta = { layout: 'ZPaymentAdminLayout' }

                    return record
                })
            }

        })

        router.auto(import.meta.glob<any>('./pages/**/*.vue'), {
            strip: ['pages'],
            exclude: ['/admin/**'],
            prefix: '/zpayments',
        })

        router.addRoute({
            path: '/admin/zpayments/gateways/:id',
            redirect: to => {
                return `/admin/zpayments/gateways/${to.params.id}/details`
            },
        })

        menu.add({
            layout: 'admin',
            label: $t('Payments'),
            to: '/admin/zpayments/payments',
            icon: 'credit-card',
            group: 'Plugins',
        })


        // menu.add({
        //     layout: 'zpayments-admin',
        //     label: $t('Customers'),
        //     to: '/admin/zpayments/users',
        //     icon: 'users',
        // })

        menu.add({
            layout: 'zpayments-admin',
            label: $t('Products'),
            to: '/admin/zpayments/products',
            icon: 'box',
        })

        menu.add({
            layout: 'zpayments-admin',
            label: $t('Orders'),
            to: '/admin/zpayments/orders',
            icon: 'shopping-cart',
        })

        menu.add({
            layout: 'zpayments-admin',
            label: $t('Gateways'),
            to: '/admin/zpayments/gateways',
            icon: 'credit-card',
        })

        // menu.add({
        //     layout: 'zpayments-admin',
        //     label: $t('Entities'),
        //     to: '/admin/zpayments/gateway-entities',
        //     icon: 'database',
        // })
    }
}

