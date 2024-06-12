export const formatCurrency = (n: number) =>
    Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(n)