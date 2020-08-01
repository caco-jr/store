import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';

import Layout from '@components/Layout';
import { getProductsAPI } from '@services/api';
import { Store } from '@interfaces/store';
import ProductList from '@components/Product/List';
import ProductCard from '@components/Product/Card';

type Props = {
  store: Store;
};

const IndexPage: FunctionComponent<Props> = ({ store }) => (
  <Layout>
    <ProductList>
      {store?.products.map(product => (
        <ProductCard {...product} key={product.id} />
      ))}
    </ProductList>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const response = await getProductsAPI();

  return {
    props: {
      store: response,
    },
  };
};

export default IndexPage;
