import { cartActionType } from './actionTypes';
import { Product } from '@interfaces/store';

interface Cart {
  isVisible: boolean;
  items: Product[];
}

export const cartInitialState: Cart = {
  isVisible: false,
  items: [],
};

export const cartReducer = (state = cartInitialState, action): Cart => {
  const { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART_TAB } = cartActionType;

  switch (action.type) {
    case ADD_TO_CART:
      const items = [...state.items, action.product];

      return { ...state, items };

    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter(
        (item) => `${item.id}` !== `${action.id}`
      );

      return { ...state, items: filteredItems };

    case TOGGLE_CART_TAB:
      return { ...state, isVisible: !state.isVisible };

    default:
      return { ...state };
  }
};
