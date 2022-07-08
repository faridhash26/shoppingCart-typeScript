const CURRENCT_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCT_FORMATER.format(number);
}
