import { useMenu } from '#client/composables/useMenu.ts'
import Module from '#client/entities/module.entity.ts'
import router from '#client/facades/router.facade.ts'
import authGuard from '#client/guards/auth.guard.ts'


import './assets/css/styles.css'

export default class ZenithPayments extends Module {
    public async onLoad(): Promise<void> {
        const menu = useMenu()
        
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
            id: 'zpayments-products',
            label: $t('Products'),
            to: '/admin/zpayments/products',
            icon: 'box',
            group: $t('ZPayments'),
        })
        
        menu.add({
            id: 'zpayments-payments',
            label: $t('Payments'),
            to: '/admin/zpayments/payments',
            icon: 'box',
            group: $t('ZPayments'),
        })

        menu.add({
            id: 'zpayments-orders',
            label: $t('Orders'),
            to: '/admin/zpayments/orders',
            icon: 'box',
            group: $t('ZPayments'),
        })
    
        menu.add({
            id: 'zpayments-gateways',
            label: $t('Gateways'),
            to: '/admin/zpayments/gateways',
            icon: 'credit-card',
            group: $t('ZPayments'),
        })

        menu.add({
            id: 'zpayments-gateway-entities',
            label: $t('Entities'),
            to: '/admin/zpayments/gateway-entities',
            icon: 'database',
            group: $t('ZPayments'),
        })
    }
}