export const amount = (prices, currentCurrency) => {
  const price = prices.find(
    ({ currency }) => currency === currentCurrency
  );
  return price.amount;
}
