type RouteObject = {
  href: string;
  as: string;
};

export const getHomeURI = (): RouteObject => ({ href: '/', as: '/' });

export const getProductURI = (id: string): RouteObject => ({
  href: '/p/[id]',
  as: `/p/${id}`,
});
