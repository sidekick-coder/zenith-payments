import { useMenu } from '#client/composables/useMenu.ts'
import Module from '#client/entities/module.entity.ts'
import router from '#client/facades/router.facade.ts'
import authGuard from '#client/guards/auth.guard.ts'


import './assets/css/styles.css'

export default class ZenithPayments extends Module {
    public async onLoad(): Promise<void> {
        const menu = useMenu()
        
        router.auto(import.meta.glob<any>('./pages/**/*.vue'), {
            strip: ['pages'],
            refine(records){
                return records.map(r => {

                    if (r.path.startsWith('/admin')) {
                        r.path = '/admin/zpayments/' + r.path.replace('/admin', '')
                        r.beforeEnter = [authGuard]
                        return r
                    }

                    r.path = '/zpayments/' + r.path

                    return r
                })
            }
        })

        router.addRoute({
            path: '/admin/zpayments/gateways/:id',
            redirect: to => {
                return `/admin/zpayments/gateways/${to.params.id}/details`
            },
        })

        menu.add({
            id: 'zpayments-billings',
            label: $t('Billings'),
            to: '/admin/zpayments/billings',
            icon: 'DollarSign',
            group: $t('Payments'),
        })

        menu.add({
            id: 'zpayments-subscriptions',
            label: $t('Subscriptions'),
            to: '/admin/zpayments/subscriptions',
            icon: 'repeat',
            group: $t('Payments'),
        })

        menu.add({
            id: 'zpayments-plans',
            label: $t('Plans'),
            to: '/admin/zpayments/plans',
            icon: 'package',
            group: $t('Payments'),
        })
    
        menu.add({
            id: 'zpayments-gateways',
            label: $t('Gateways'),
            to: '/admin/zpayments/gateways',
            icon: 'credit-card',
            group: $t('Payments'),
        })

        menu.add({
            id: 'zpayments-gateway-entities',
            label: $t('Entities'),
            to: '/admin/zpayments/gateway-entities',
            icon: 'database',
            group: $t('Payments'),
        })
    }
}