import React, { FunctionComponent } from 'react';

import styles from './index.module.scss';
import CartRemove from '@components/Cart/Remove';
import { FeaturedMedia } from '@interfaces/store';
import { getPriceObject } from '@utils/price';
import { buildImageURI } from '@utils/URIs/image';

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
  const { priceInteger, priceFraction } = getPriceObject(price);

  return (
    <article className={styles['c-cart-product']}>
      <section className={styles['wrapper']}>
        <figure className={styles['figure']}>
          <img
            className={styles['image']}
            src={buildImageURI(featuredMedia.baseURI, {
              width: 80,
            })}
          />
        </figure>

        <section className={styles['content']}>
          <span className={styles['title']}>{title}</span>

          <span className={styles['style']}>{style}</span>
        </section>

        <div className={styles['price']}>
          <span className={styles['currency-format']}>{currencyFormat}</span>

          <span className={styles['price-integer']} data-testid="price-integer">
            {priceInteger}
          </span>

          <span
            className={styles['price-fraction']}
            data-testid="price-fraction"
          >
            ,{priceFraction}
          </span>
        </div>
      </section>

      <CartRemove id={`${id}`} className={styles['remove']} />
    </article>
  );
};

export default CartProduct;
