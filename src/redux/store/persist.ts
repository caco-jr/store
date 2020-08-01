import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import rootReducer from './reducer';

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
