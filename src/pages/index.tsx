import { GetStaticProps } from 'next';

export { default } from '@views/Home';
import { getProductsAPI } from '@services/api';

export const getStaticProps: GetStaticProps = async () => {
  const response = await getProductsAPI();

  return {
    props: {
      store: response,
    },
  };
};
