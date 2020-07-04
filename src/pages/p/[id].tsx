import { GetStaticPaths, GetStaticProps } from 'next';
import { FunctionComponent } from 'react';

import Layout from '@components/Layout';
import { STORE_NAME } from '@utils/strings';
import { Product } from '@interfaces/store';
import { getProductAPI, getProductsAPI } from '@services/api';
import { isArray } from 'util';

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

  const { title } = response;

  return (
    <Layout title={`${title}`}>
      <span className={`${componentClassName}`}>{title}</span>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on products
  const response = await getProductsAPI();

  const paths = response.products.map((user) => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
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
