import { getHomeURI, getProductURI } from './pages';

describe('URI', () => {
  it('Should return URI for home', () => {
    expect(getHomeURI()).toEqual('/');
  });

  it('Should return URI for Product page', () => {
    expect(getProductURI('3')).toEqual('/p/3');
  });
});
