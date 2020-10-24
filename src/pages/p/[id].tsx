import { GetStaticPaths, GetStaticProps } from 'next';

export { default } from '@views/p/[id]';
import { getProductAPI, getProductsAPI } from '@services/api';
import { slugify } from '@utils/strings';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await getProductsAPI();

    // Get the paths we want to pre-render based on products
    const paths = response.products.map(user => ({
      params: {
        id: `${slugify(user.title)}---${user.id}`,
      },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error(err);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const paramID = params?.id;
    const id = Array.isArray(paramID)
      ? paramID.join(',')
      : paramID?.split('---')[1];

    const response = await getProductAPI(id);

    return { props: { response } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
