import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import { getStoreAPI } from '../services/api';
import { Store } from '../interfaces/index';

type Props = {
  store: Store;
};

const IndexPage: FunctionComponent<Props> = ({ store }) => (
  <Layout title="Home">
    <h1>{store.products[0].price}</h1>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const response = await getStoreAPI();

  return {
    props: {
      store: response,
    },
  };
};

export default IndexPage;
