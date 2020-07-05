import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import './index.scss';
import { getPriceObject, getPrettyPriceFormat } from '@utils/price';
import { getProductURI } from '@utils/URIs/pages';
import { FeaturedMedia } from '@interfaces/store';

type Props = {
  id: number;
  title: string;
  currencyFormat: string;
  currencyId: 'BRL' | 'USD' | 'EUR';
  price: number;
  installments: number;
  featuredMedia: FeaturedMedia;
};

const ProductCard: FunctionComponent<Props> = ({
  id,
  title,
  currencyFormat,
  currencyId,
  price,
  installments,
  featuredMedia,
}) => {
  const componentClassName = 'c-product-card';

  const { priceInteger, priceFraction } = getPriceObject(price);

  return (
    <article className={componentClassName}>
      <Link href={getProductURI(`${id}`)}>
        <a>
          <figure className={`${componentClassName}__figure`}>
            <img
              src={featuredMedia.baseURI}
              className={`${componentClassName}__image`}
            />
          </figure>
        </a>
      </Link>

      <Link href={getProductURI(`${id}`)}>
        <a>
          <span className={`${componentClassName}__title`}>{title}</span>
        </a>
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
