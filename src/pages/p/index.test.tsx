import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import preloadAll from 'jest-next-dynamic';

import { mockStoreData } from 'src/__mocks__/api/data';
import { mockStore, initialStoreMock } from 'src/__mocks__/redux/store';
import ProductPage from './[id]';

describe('Product page', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  it('Should render feedback for error', () => {
    const store = mockStore(initialStoreMock);
    const errorFeedback = 'Without props test';

    const { getByText } = render(
      <Provider store={store}>
        <ProductPage errors={errorFeedback} />
      </Provider>
    );

    expect(getByText(/Error: Without props test/i)).toBeInTheDocument();
  });

  it('Should render product page', () => {
    const store = mockStore(initialStoreMock);
    const productMock = { ...mockStoreData.products[0] };

    const { queryByText } = render(
      <Provider store={store}>
        <ProductPage response={productMock} />
      </Provider>
    );

    expect(queryByText(/Error: Without props test/i)).not.toBeInTheDocument();
    expect(queryByText(productMock.title)).toBeInTheDocument();
  });
});
