import { cartActionType } from './actionTypes';

const initialState = {
  isVisible: false,
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  const { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART_TAB } = cartActionType;

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state };

    case REMOVE_FROM_CART:
      return { ...state };

    case TOGGLE_CART_TAB:
      return { ...state, isVisible: !state.isVisible };

    default:
      return { ...state };
  }
};
