import React, { FunctionComponent } from 'react';

import './index.scss';
import CartRemove from '@components/Cart/Remove';
import { FeaturedMedia } from '@interfaces/store';
import { getPriceObject } from '@utils/price';

type Props = {
  id: number;
  title: string;
  style: string;
  price: number;
  featuredMedia: FeaturedMedia;
  currencyFormat: string;
};

const CartProduct: FunctionComponent<Props> = ({
  id,
  title,
  style,
  price,
  featuredMedia,
  currencyFormat,
}) => {
  const componentClassName = 'c-cart-product';

  const { priceInteger, priceFraction } = getPriceObject(price);

  return (
    <article className={componentClassName}>
      <figure className={`${componentClassName}__figure`}>
        <img
          className={`${componentClassName}__image`}
          src={featuredMedia.baseURI}
        />
      </figure>

      <section className={`${componentClassName}__content`}>
        <span className={`${componentClassName}__title`}>{title}</span>

        <span className={`${componentClassName}__style`}>{style}</span>

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
      </section>

      <CartRemove id={`${id}`} />
    </article>
  );
};

export default CartProduct;
