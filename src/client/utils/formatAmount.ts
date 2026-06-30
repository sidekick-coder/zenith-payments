export function formatAmount(amount: number, currency: string) {
    const value = amount / 100

    const formater = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    })

    return formater.format(value)

}
