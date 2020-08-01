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
    throw new Error('Parameter "price" must be a number');
  }

  const priceSplit = price.toFixed(2)?.split('.');
  return buildPriceObject(priceSplit[0], priceSplit[1]);
};

export const getPrettyPriceFormat = (
  price: number,
  currency: 'BRL' | 'USD' | 'EUR'
): string => {
  if (typeof price !== 'number') {
    throw new Error('Parameter "price" must be a number');
  }

  return new Intl.NumberFormat('pt', {
    style: 'currency',
    currency,
  }).format(price);
};
