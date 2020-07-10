import { slugify } from './index';

describe('Slugify', () => {
  it('should return slugify', () => {
    const titleSlugify = slugify('Camisa Liga Retrô Holanda 1974 Feminino');

    expect(titleSlugify).toEqual('camisa-liga-retro-holanda-1974-feminino');
  });
});
