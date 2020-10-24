import { FunctionComponent } from 'react';

import Layout from '@components/Layout';
import { Store } from '@interfaces/store';
import ProductList from '@components/Product/List';
import ProductCard from '@components/Product/Card';

type Props = {
  store: Store;
};

const HomePage: FunctionComponent<Props> = ({ store }) => (
  <Layout>
    <ProductList>
      {store?.products?.map(product => (
        <ProductCard {...product} key={product.id} />
      ))}
    </ProductList>
  </Layout>
);

export default HomePage;
