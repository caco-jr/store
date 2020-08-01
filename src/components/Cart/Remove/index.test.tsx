import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import { mockStore, initialStoreMock } from 'src/__mocks__/redux/store';
import CartRemove from '.';
import { cartActionType } from '@redux/cart/actionTypes';

describe('CartRemove', () => {
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
