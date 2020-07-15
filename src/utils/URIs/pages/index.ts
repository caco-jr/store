import { slugify } from '@utils/strings';

type RouteObject = {
    href: string;
    as: string;
};

export const getHomeURI = (): RouteObject => ({ href: '/', as: '/' });

export const getProductURI = (id: string, title: string): RouteObject => ({
    href: '/p/[id]',
    as: `/p/${slugify(title)}---${id}`,
});
