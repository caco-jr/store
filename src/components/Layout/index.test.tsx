import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Layout from '.';

describe('LayoutComponent', () => {
  it('Should render without crashing', () => {
    const { container } = render(<Layout title="Layout Testing" />);

    expect(container).toBeInTheDocument();
  });

  it('Should have main tag', () => {
    const { container } = render(<Layout title="Layout Testing" />);

    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
