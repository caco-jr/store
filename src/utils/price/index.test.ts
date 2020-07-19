import { getPriceObject, buildPriceObject, getPrettyPriceFormat } from '.';

describe('getPriceParts', () => {
    it('Should return correctly formatted price', () => {
        expect(getPriceObject(190.9)).toMatchObject(
            buildPriceObject('190', '90')
        );
    });

    it('Should return 0 for fraction', () => {
        expect(getPriceObject(190)).toMatchObject(
            buildPriceObject('190', '00')
        );
    });

    it('Should throw error for non number', () => {
        expect(() => {
            // @ts-ignore
            getPriceObject('190');
        }).toThrowError();
    });
});

describe('getPrettyPriceFormat', () => {
    it('Should return pretty format', () => {
        const spaceCharCode = '\xa0';

        expect(getPrettyPriceFormat(190.9, 'BRL')).toEqual(
            `R$${spaceCharCode}190,90`
        );
    });

    it('Should throw error for non number', () => {
        expect(() => {
            // @ts-ignore
            getPrettyPriceFormat('190.9', 'BRL');
        }).toThrowError();
    });
});
