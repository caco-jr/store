import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import { getPriceObject, getPrettyPriceFormat } from '@utils/price';
import { getProductURI } from '@utils/URIs/pages';

type Props = {
  id: number;
  title: string;
  currencyFormat: string;
  currencyId: 'BRL' | 'USD' | 'EUR';
  price: number;
  installments: number;
};

const ProductCard: FunctionComponent<Props> = ({
  id,
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
      <Link href={getProductURI(`${id}`)}>
        <span className={`${componentClassName}__title`}>{title}</span>
      </Link>

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
          {`ou ${installments} x ${getPrettyPriceFormat(
            price / installments,
            currencyId
          )}`}
        </div>
      )}
    </article>
  );
};

export default ProductCard;
