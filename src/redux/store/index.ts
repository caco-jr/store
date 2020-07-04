import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { cartReducer } from '@redux/cart/reducer';

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['cart'],
};

const combinedReducers = combineReducers({ cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const initialStore = { ...combinedReducers };

function makeStore(initialState = initialStore) {
  return createStore(
    persistedReducer,
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
