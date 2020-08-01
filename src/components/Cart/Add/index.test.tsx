import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import CartAdd from '.';
import { mockStore, initialStoreMock } from 'src/__mocks__/redux/store';
import { cartActionType } from '@redux/cart/actionTypes';
import { mockStoreData } from 'src/__mocks__/api/data';

describe('Cart addition', () => {
  it('Should have defaultProps', () => {
    expect(CartAdd.defaultProps?.text).toBeDefined();
  });

  it('Should use defaultProps', () => {
    const store = mockStore(initialStoreMock);

    const { getByText } = render(
      <Provider store={store}>
        <CartAdd product={mockStoreData.products[0]} />
      </Provider>
    );

    expect(getByText(CartAdd.defaultProps.text)).toBeInTheDocument();
  });

  it('Should add product to cart and show feedback', () => {
    const store = mockStore(initialStoreMock);
    const product = mockStoreData.products[0];

    const { getByRole } = render(
      <Provider store={store}>
        <CartAdd product={product} />
      </Provider>
    );

    fireEvent.click(getByRole('button'));

    const actions = store.getActions();
    const expectedPayload = { type: cartActionType.ADD_TO_CART, product };
    const togglePayload = { type: cartActionType.TOGGLE_CART_TAB };

    expect(actions).toEqual([expectedPayload, togglePayload]);
  });
});
