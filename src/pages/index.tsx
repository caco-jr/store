import { GetStaticProps } from 'next';
import { Store } from '@interfaces/store';

import Home from '@views/Home';
import { getProductsAPI } from '@services/api';

type Props = {
  store: Store;
};

const IndexPage = ({ store }: Props) => {
  return <Home store={store} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getProductsAPI();

  return {
    props: {
      store: response,
    },
  };
};

export default IndexPage;
