import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductCard from './index';
import { mockStoreData } from 'src/__mocks__/api/data';
import { buildImageURI } from '@utils/URIs/image';

const mockCardProps = { ...mockStoreData.products[0] };

describe('Card content checks', () => {
    it('Should have correct path for image', () => {
        const { container } = render(<ProductCard {...mockCardProps} />);
        const imageURI = buildImageURI(mockCardProps.featuredMedia.baseURI, {
            width: 350,
        });

        expect(container.querySelector('img')).toHaveAttribute('src', imageURI);
    });

    it('Should have title', () => {
        const { getByText } = render(<ProductCard {...mockCardProps} />);

        expect(getByText(mockCardProps.title)).toBeInTheDocument();
    });

    it('Should have currencyFormat', () => {
        const { getByText } = render(<ProductCard {...mockCardProps} />);

        expect(getByText(mockCardProps.currencyFormat)).toBeInTheDocument();
    });

    it('Should have integer price', () => {
        const { getByTestId } = render(<ProductCard {...mockCardProps} />);

        expect(getByTestId('price-integer').textContent).toBe('229');
    });

    it('Should have fraction price', () => {
        const { getByTestId } = render(<ProductCard {...mockCardProps} />);

        expect(getByTestId('price-fraction').textContent).toBe(',90');
    });

    it('Should have installments', () => {
        const { getByText } = render(<ProductCard {...mockCardProps} />);

        expect(getByText(/ou 9 x R\$ 25,54/i)).toBeInTheDocument();
    });

    it('Should not render installments', () => {
        const mock = { ...mockCardProps, installments: 0 };
        const { queryByTestId } = render(<ProductCard {...mock} />);

        expect(queryByTestId('installments')).not.toBeInTheDocument();
    });
});
