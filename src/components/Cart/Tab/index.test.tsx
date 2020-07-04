import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import { mockStore, initialStoreMock } from '@redux/store/mock';
import CartTab from '.';

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

  it('Should have bag text', () => {
    const store = mockStore(initialStoreMock);

    const { getByText } = render(
      <Provider store={store}>
        <CartTab />
      </Provider>
    );

    expect(getByText(/sacola/i)).toBeInTheDocument();
  });
});
