import { getPriceObject, buildPriceObject, getPrettyPriceFormat } from '.';

describe('getPriceParts', () => {
  it('Should return correctly formatted price', () => {
    expect(getPriceObject(190.9)).toMatchObject(buildPriceObject('190', '90'));
  });

  it('Should return 0 for fraction', () => {
    expect(getPriceObject(190)).toMatchObject(buildPriceObject('190', '00'));
  });

  it('Should return undefined for non number', () => {
    // @ts-ignore
    expect(getPriceObject('190')).toBeUndefined();
  });
});

describe('getPrettyPriceFormat', () => {
  it('Should return pretty format', () => {
    const spaceCharCode = '\xa0';

    expect(getPrettyPriceFormat(190.9, 'BRL')).toEqual(
      `R$${spaceCharCode}190,90`
    );
  });

  it('Should return undefined for non number', () => {
    // @ts-ignore
    expect(getPrettyPriceFormat('190.9', 'BRL')).toBeUndefined();
  });
});
