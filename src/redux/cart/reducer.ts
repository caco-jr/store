import { cartActionType } from './actionTypes';

const initialState = {
  visible: false,
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  const {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    OPEN_CART_TAB,
    CLOSE_CART_TAB,
  } = cartActionType;

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state };

    case REMOVE_FROM_CART:
      return { ...state };

    case OPEN_CART_TAB:
      return { ...state, visible: true };

    case CLOSE_CART_TAB:
      return { ...state, visible: false };

    default:
      return { ...state };
  }
};
