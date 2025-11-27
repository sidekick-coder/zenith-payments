import authGuard from '#client/guards/auth.guard.ts'
import { createGuestGuard } from '#client/guards/guest.guard.ts'
import { defineClientSetup } from '#client/utils/defineClientSetup.ts'
import { $t } from '#shared/lang'

export default defineClientSetup(({ router, menu }) => {
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

})