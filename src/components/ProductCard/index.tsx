import React, { FunctionComponent } from 'react';

import { getPriceObject } from '@utils/price';

type Props = {
  title: string;
  currencyFormat: string;
  price: number;
};

const ProductCard: FunctionComponent<Props> = ({
  title,
  currencyFormat,
  price,
}) => {
  const componentClassName = 'c-card';

  const { integer, fraction } = getPriceObject(price);

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
          {integer}
        </span>

        <span
          className={`${componentClassName}__price-fraction`}
          data-testid="price-fraction"
        >
          {fraction}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
