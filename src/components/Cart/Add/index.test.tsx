import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import CartAdd from '.';
import { mockStore, initialStoreMock } from '@redux/store/mock';
import { cartActionType } from '@redux/cart/actionTypes';
import { storeData } from 'src/__mocks__/api/data';

describe('Cart addition', () => {
  it('Should have defaultProps', () => {
    expect(CartAdd.defaultProps?.text).toBeDefined();
  });

  it('Should use defaultProps', () => {
    const store = mockStore(initialStoreMock);

    const { getByText } = render(
      <Provider store={store}>
        <CartAdd product={storeData.products[0]} />
      </Provider>
    );

    expect(getByText(CartAdd.defaultProps.text)).toBeInTheDocument();
  });

  it('Should add product to cart', () => {
    const store = mockStore(initialStoreMock);
    const product = storeData.products[0];

    const { getByRole } = render(
      <Provider store={store}>
        <CartAdd product={product} />
      </Provider>
    );

    fireEvent.click(getByRole('button'));

    const actions = store.getActions();
    const expectedPayload = { type: cartActionType.ADD_TO_CART, product };

    expect(actions).toEqual([expectedPayload]);
  });
});
