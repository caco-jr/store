import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import { mockStore, initialStoreMock } from '@redux/store/mock';
import CartRemove from '.';
import { cartActionType } from '@redux/cart/actionTypes';

describe('CartRemove', () => {
  it('Should use text defaultProps', () => {
    const store = mockStore(initialStoreMock);

    const { getByText } = render(
      <Provider store={store}>
        <CartRemove id="2" />
      </Provider>
    );

    expect(getByText(CartRemove.defaultProps.text)).toBeInTheDocument();
  });

  it('Should remove product from cart', () => {
    const store = mockStore(initialStoreMock);
    const id = '2';

    const { getByRole } = render(
      <Provider store={store}>
        <CartRemove id={id} />
      </Provider>
    );

    fireEvent.click(getByRole('button'));

    const actions = store.getActions();
    const expectedPayload = { type: cartActionType.REMOVE_FROM_CART, id };

    expect(actions).toEqual([expectedPayload]);
  });
});
