import { getHomeURI, getProductURI } from '.';

describe('URI', () => {
  it('Should return URI for home', () => {
    expect(getHomeURI()).toMatchObject({ href: '/', as: '/' });
  });

  it('Should return URI for Product page', () => {
    expect(getProductURI('3')).toMatchObject({ href: '/p/[id]', as: '/p/3' });
  });
});
