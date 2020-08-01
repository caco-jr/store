import React from 'react';
import { render } from '@testing-library/react';

import ProductList from '.';

describe('Product list', () => {
  it('should render children', () => {
    const text = 'ProductList testing';
    const { getByText } = render(<ProductList> {text} </ProductList>);

    expect(getByText(text)).toBeInTheDocument();
  });
});
