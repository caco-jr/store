import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '.';
import { STORE_NAME } from '@utils/strings';

describe('Header content checks', () => {
  it('Should have Store name', () => {
    const { getByText } = render(<Header />);

    expect(getByText(STORE_NAME)).toBeInTheDocument();
  });
});
