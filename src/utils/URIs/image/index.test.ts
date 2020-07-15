import { buildImageURI } from './index';
import { mockStoreData } from 'src/__mocks__/api/data';

const mockBaseImageURI = mockStoreData.products[0].featuredMedia.baseURI;

describe('Path Image', () => {
    it('should return correctly URI for default size', () => {
        expect(buildImageURI(mockBaseImageURI)).toBe(
            `${mockBaseImageURI}?ims=544x`
        );
    });

    it('should return correctly URI for width', () => {
        expect(buildImageURI(mockBaseImageURI, { width: 200 })).toBe(
            `${mockBaseImageURI}?ims=200x`
        );
    });

    it('should return correctly URI for width and height', () => {
        expect(
            buildImageURI(mockBaseImageURI, { width: 200, height: 100 })
        ).toBe(`${mockBaseImageURI}?ims=200x100`);
    });
});
