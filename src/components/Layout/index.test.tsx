import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Layout from '.';

it('should render Header', () => {
  const { getByText } = render(<Layout title="Ola" />);

  expect(getByText('Products API')).toBeInTheDocument();
});
