import { GetStaticPaths, GetStaticProps } from 'next';
import { FunctionComponent } from 'react';

import Layout from '@components/Layout';
import { STORE_NAME } from '@utils/strings';
import { Product } from '@interfaces/store';
import { getProductAPI, getProductsAPI } from '@services/api';
import { isArray } from 'util';
import CartAdd from '@components/Cart/Add';
import { getPrettyPriceFormat } from '@utils/price/index';

interface Props {
  response?: Product;
  errors?: string;
}

const ProductPage: FunctionComponent<Props> = ({ errors, response }) => {
  const componentClassName = 'c-product-page';

  if (errors || !response) {
    return (
      <Layout title={`Erro | ${STORE_NAME}`}>
        <p>Error: {errors}</p>
      </Layout>
    );
  }

  const { title, description, price, currencyId } = response;

  return (
    <Layout title={`${title}`}>
      <section className={`container`}>
        <h1 className={`${componentClassName}__title`}>{title}</h1>

        <span className={`${componentClassName}__description`}>
          {description}
        </span>

        <span className={`${componentClassName}__price`}>
          {getPrettyPriceFormat(price, currencyId)}
        </span>

        <CartAdd product={response} />
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
    const response = await getProductAPI(isArray(id) ? id.join(',') : id);

    return { props: { response } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default ProductPage;
