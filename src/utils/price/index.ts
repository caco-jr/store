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
    console.info('Parameter "price" must be a number');
    return;
  }

  const priceSplit = `${price}`.split('.');

  return buildPriceObject(priceSplit[0], priceSplit[1]?.padEnd(2, '0') || '00');
};

export const getPrettyPriceFormat = (
  price: number,
  currency: 'BRL' | 'USD' | 'EUR'
): string => {
  if (typeof price !== 'number') {
    console.info('Parameter "price" must be a number');
    return;
  }

  return new Intl.NumberFormat('pt', {
    style: 'currency',
    currency,
  }).format(price);
};