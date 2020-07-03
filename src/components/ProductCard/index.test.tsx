import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductCard from './index';

const mockCardProps = {
  title: 'Camiseta SPFC',
  currencyFormat: 'R$',
};

describe('Card', () => {
  it('Should have title', () => {
    const { getByText } = render(<ProductCard {...mockCardProps} />);

    expect(getByText(mockCardProps.title)).toBeInTheDocument();
  });

  it('Should have currencyFormat', () => {
    const { getByText } = render(<ProductCard {...mockCardProps} />);

    expect(getByText(mockCardProps.currencyFormat)).toBeInTheDocument();
  });
});
