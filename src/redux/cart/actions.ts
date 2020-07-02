import { cartActionType } from './actionTypes';

const { REMOVE_FROM_CART, ADD_TO_CART } = cartActionType;

export const addToCart = () => ({ type: ADD_TO_CART });
export const removeFromCart = () => ({ type: REMOVE_FROM_CART });
