import React, { FunctionComponent } from 'react';

import { getPriceObject, getPrettyPriceFormat } from '@utils/price';

type Props = {
  title: string;
  currencyFormat: string;
  currencyId: 'BRL' | 'USD' | 'EUR';
  price: number;
  installments: number;
};

const ProductCard: FunctionComponent<Props> = ({
  title,
  currencyFormat,
  currencyId,
  price,
  installments,
}) => {
  const componentClassName = 'c-product-card';

  const { priceInteger, priceFraction } = getPriceObject(price);

  return (
    <article className={componentClassName}>
      <span className={`${componentClassName}__title`}>{title}</span>

      <div className={`${componentClassName}__price`}>
        <span className={`${componentClassName}__currency-format`}>
          {currencyFormat}
        </span>

        <span
          className={`${componentClassName}__price-integer`}
          data-testid="price-integer"
        >
          {priceInteger}
        </span>

        <span
          className={`${componentClassName}__price-fraction`}
          data-testid="price-fraction"
        >
          ,{priceFraction}
        </span>
      </div>

      {installments > 0 && (
        <div
          className={`${componentClassName}__installments`}
          data-testid="installments"
        >
          ou {installments} x{' '}
          {getPrettyPriceFormat(price / installments, currencyId)}
        </div>
      )}
    </article>
  );
};

export default ProductCard;
