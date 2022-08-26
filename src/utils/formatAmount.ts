export function formatAmount(amount: number) {
  const formattedAmount = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)

  return formattedAmount
}
