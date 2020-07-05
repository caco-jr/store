import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import { mockStore, initialStoreMock } from '@redux/store/mock';
import CartTab from '.';
import { mockStoreData } from 'src/__mocks__/api/data';
import { ReduxStore } from '@redux/store/interface';

describe('Cart Tab content checks', () => {
  it('Should have className modifier for hidden', () => {
    const store = mockStore(initialStoreMock);

    const { container } = render(
      <Provider store={store}>
        <CartTab />
      </Provider>
    );

    expect(container.firstChild).toHaveClass('c-cart-tab--hidden');
  });

  it('Should have className modifier for visible', () => {
    const initialState = {
      ...initialStoreMock,
      cart: { ...initialStoreMock.cart, isVisible: true },
    };

    const store = mockStore(initialState);

    const { container } = render(
      <Provider store={store}>
        <CartTab />
      </Provider>
    );

    expect(container.firstChild).toHaveClass('c-cart-tab--visible');
  });

  it('Should have feedback for empty cart', () => {
    const store = mockStore(initialStoreMock);

    const { getByText } = render(
      <Provider store={store}>
        <CartTab />
      </Provider>
    );

    expect(
      getByText(/Nenhum item adicionado no carrinho/i)
    ).toBeInTheDocument();
  });

  it('Should have cards of products', () => {
    const initialStore: ReduxStore = Object.assign({}, initialStoreMock, {
      cart: { items: mockStoreData.products.slice(0, 4) },
    });

    const store = mockStore(initialStore);

    const { getByTestId, queryByText } = render(
      <Provider store={store}>
        <CartTab />
      </Provider>
    );

    expect(
      queryByText(/Nenhum item adicionado no carrinho/i)
    ).not.toBeInTheDocument();

    expect(getByTestId('cart-tab-content').childNodes).toHaveLength(4);
  });
});
