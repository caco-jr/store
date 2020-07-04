import { cartActionType } from './actionTypes';

const {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  OPEN_CART_TAB,
  CLOSE_CART_TAB,
} = cartActionType;

export const addToCart = () => ({ type: ADD_TO_CART });
export const removeFromCart = () => ({ type: REMOVE_FROM_CART });

export const openCartTab = () => ({ type: OPEN_CART_TAB });
export const closeCartTab = () => ({ type: CLOSE_CART_TAB });
