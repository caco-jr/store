type priceObject = {
  integer: string;
  fraction: string;
};

export const buildPriceObject = (
  integer: string,
  fraction: string
): priceObject => ({
  integer,
  fraction,
});

export const getPriceObject = (price: number): priceObject => {
  if (typeof price !== 'number') {
    console.info('Parameter should be a number');
    return;
  }

  const priceSplit = `${price}`.split('.');

  return buildPriceObject(priceSplit[0], priceSplit[1]?.padEnd(2, '0') || '00');
};
