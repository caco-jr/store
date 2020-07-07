import { GetStaticPaths, GetStaticProps } from 'next';
import { FunctionComponent } from 'react';

import styles from './index.module.scss';
import Layout from '@components/Layout';
import { STORE_NAME } from '@utils/strings';
import { Product } from '@interfaces/store';
import { getProductAPI, getProductsAPI } from '@services/api';
import CartAdd from '@components/Cart/Add';
import { getPrettyPriceFormat } from '@utils/price/index';
import { buildImageURI } from '../../utils/URIs/image/index';

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
              src={buildImageURI(featuredMedia.baseURI, { width: 450 })}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getProductsAPI();

  // Get the paths we want to pre-render based on products
  const paths = response.products.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const response = await getProductAPI(Array.isArray(id) ? id.join(',') : id);

    return { props: { response } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default ProductPage;
