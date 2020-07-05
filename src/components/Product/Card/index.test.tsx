import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductCard from './index';

const mockCardProps = {
  id: 1,
  title: 'Camiseta SPFC',
  currencyFormat: 'R$',
  price: 229.9,
  installments: 9,
  currencyId: 'BRL' as const,
};

describe('Card content checks', () => {
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
