import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { cartReducer } from '@redux/cart/reducer';
import { initialStoreMock } from './mock';
import { ReduxStore } from './interface';

const combinedReducers = combineReducers({ cart: cartReducer });
const initialStore: ReduxStore = { ...initialStoreMock };

function makeStore(initialState: ReduxStore = initialStore) {
  return createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware(logger))
  );
}

let store;
export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
