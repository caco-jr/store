import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import ToggleTab from '.';
import { initialStoreMock, mockStore } from '@redux/store/mock';
import { cartActionType } from '@redux/cart/actionTypes';

describe('Button Cart', () => {
  it('should render length', () => {
    const store = mockStore(initialStoreMock);

    const { getByText } = render(
      <Provider store={store}>
        <ToggleTab />
      </Provider>
    );

    expect(getByText('0')).toBeInTheDocument();
  });

  it('Should dispatch TOGGLE_CART_TAB', () => {
    const store = mockStore(initialStoreMock);

    const { getByRole } = render(
      <Provider store={store}>
        <ToggleTab />
      </Provider>
    );

    fireEvent.click(getByRole('button'));
    const actions = store.getActions();
    const expectedPayload = { type: cartActionType.TOGGLE_CART_TAB };

    expect(actions).toEqual([expectedPayload]);
  });
});