import configureStore from 'redux-mock-store';

import { cartInitialState } from '@redux/cart/reducer';

export const initialStoreMock = {
  cart: cartInitialState,
};

const middlewares = [];
export const mockStore = configureStore(middlewares);
