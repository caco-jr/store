type priceObject = {
  priceInteger: string;
  priceFraction: string;
};

export const buildPriceObject = (
  priceInteger: string,
  priceFraction: string
): priceObject => ({
  priceInteger,
  priceFraction,
});

export const getPriceObject = (price: number): priceObject => {
  if (typeof price !== 'number') {
    console.info('Parameter should be a number');
    return;
  }

  const priceSplit = `${price}`.split('.');

  return buildPriceObject(priceSplit[0], priceSplit[1]?.padEnd(2, '0') || '00');
};
