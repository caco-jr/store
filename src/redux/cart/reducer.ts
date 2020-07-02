import { cartActionType } from './actionTypes';

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  const { ADD_TO_CART, REMOVE_FROM_CART } = cartActionType;

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state };

    case REMOVE_FROM_CART:
      return { ...state };

    default:
      return { ...state };
  }
};
