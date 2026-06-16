import { PluginEntity, authGuard, menu, router } from '@sidekick-coder/zenith-kit/client'
// import './assets/css/styles.css'

export default class extends PluginEntity {
    public async load() {
        router.auto(import.meta.glob<any>('./pages/admin/**/*.vue'), {
            strip: ['pages', 'admin'],
            guards: [authGuard],
            prefix: '/admin/zpayments',
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
            id: 'zpayments-payments',
            layout: 'admin',
            label: $t('Payments'),
            to: '/admin/zpayments/payments',
            icon: 'credit-card',
            group: 'ZPayments',
        })

        menu.add({
            id: 'zpayments-orders',
            layout: 'admin',
            label: $t('Orders'),
            to: '/admin/zpayments/orders',
            icon: 'shopping-cart',
            group: 'ZPayments',
        })

        menu.add({
            id: 'zpayments-customers',
            layout: 'admin',
            label: $t('Customers'),
            to: '/admin/zpayments/users',
            icon: 'users',
            group: 'ZPayments',
        })

        menu.add({
            id: 'zpayments-products',
            layout: 'admin',
            label: $t('Products'),
            to: '/admin/zpayments/products',
            icon: 'box',
            group: 'ZPayments',
        })
    
        menu.add({
            id: 'zpayments-gateways',
            layout: 'admin',
            label: $t('Gateways'),
            to: '/admin/zpayments/gateways',
            icon: 'credit-card',
            group: 'ZPayments',
        })

        menu.add({
            id: 'zpayments-gateway-entities',
            layout: 'admin',
            label: $t('Entities'),
            to: '/admin/zpayments/gateway-entities',
            icon: 'database',
            group: 'ZPayments',
        })
    }
}

