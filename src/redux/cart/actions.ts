import { cartActionType } from './actionTypes';

const { REMOVE_FROM_CART, ADD_TO_CART, TOGGLE_CART_TAB } = cartActionType;

export const addToCart = (product) => ({ type: ADD_TO_CART, product });
export const removeFromCart = () => ({ type: REMOVE_FROM_CART });

export const toggleCartTab = () => ({ type: TOGGLE_CART_TAB });
