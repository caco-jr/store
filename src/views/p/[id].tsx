import { FunctionComponent } from 'react';

import styles from './index.module.scss';
import Layout from '@components/Layout';
import { STORE_NAME } from '@utils/strings';
import { Product } from '@interfaces/store';
import CartAdd from '@components/Cart/Add';
import { getPrettyPriceFormat } from '@utils/price/index';
import { buildImageURI } from '@utils/URIs/image/index';

interface Props {
  response?: Product;
  errors?: string;
}

const ProductPage: FunctionComponent<Props> = ({ errors, response }) => {
  if (errors || !response) {
    return (
      <Layout title={`Erro | ${STORE_NAME}`}>
        <p>Error: {errors}</p>
      </Layout>
    );
  }

  const { title, description, price, currencyId, featuredMedia } = response;

  return (
    <Layout title={`${title}`}>
      <section className={`container`}>
        <section className={styles['wrapper']}>
          <figure className={styles['figure']}>
            <img
              className={styles['image']}
              src={buildImageURI(featuredMedia.baseURI, {
                width: 450,
              })}
            />
          </figure>

          <section className={styles['content']}>
            <h1 className={styles['title']}>{title}</h1>

            <span className={styles['description']}>{description}</span>

            <span className={styles['price']}>
              {getPrettyPriceFormat(price, currencyId)}
            </span>

            <CartAdd product={response} />
          </section>
        </section>
      </section>
    </Layout>
  );
};

export default ProductPage;
