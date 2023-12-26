export const formatMoney = (money: number) => {
  return money ? money.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,") : 0;
};

export const formatQuantity = (quantity: number, step: number) => {
  if (step === 0.5) return Math.round(quantity*2)/2;
  if (step === 1) return Math.ceil(quantity);

  return quantity;
};
