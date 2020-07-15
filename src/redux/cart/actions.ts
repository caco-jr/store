import { cartActionType } from './actionTypes';
import { Product } from '@interfaces/store';

const { REMOVE_FROM_CART, ADD_TO_CART, TOGGLE_CART_TAB } = cartActionType;

export const addToCart = (product: Product) => ({ type: ADD_TO_CART, product });

export const removeFromCart = (productId: string) => ({
    type: REMOVE_FROM_CART,
    id: productId,
});

export const toggleCartTab = () => ({ type: TOGGLE_CART_TAB });
