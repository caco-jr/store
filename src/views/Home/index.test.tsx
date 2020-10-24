import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import preloadAll from 'jest-next-dynamic';

import { mockStoreData } from 'src/__mocks__/api/data';
import { mockStore, initialStoreMock } from 'src/__mocks__/redux/store';
import HomePage from '.';

describe('Home page', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  it('Should render without crash', () => {
    const store = mockStore(initialStoreMock);

    const { container } = render(
      <Provider store={store}>
        <HomePage store={null} />
      </Provider>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('Should render ProductCards', async () => {
    const store = mockStore(initialStoreMock);

    const { container } = render(
      <Provider store={store}>
        <HomePage store={mockStoreData} />
      </Provider>
    );

    expect(container.querySelectorAll('.c-product-card')).toHaveLength(
      mockStoreData.products.length
    );
  });
});
