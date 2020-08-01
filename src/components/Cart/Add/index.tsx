import React, { FunctionComponent } from 'react';
import { Product } from '@interfaces/store';
import { useDispatch } from 'react-redux';

import styles from './index.module.scss';
import { addToCart, toggleCartTab } from '@redux/cart/actions';

type Props = {
  text?: string;
  product: Product;
};

const CartAdd: FunctionComponent<Props> = ({ text, product }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={styles['c-cart-add']}
      onClick={() => {
        dispatch(addToCart(product));
        dispatch(toggleCartTab());
      }}
    >
      {text}
    </button>
  );
};

CartAdd.defaultProps = {
  text: 'Adicionar ao carrinho',
};

export default CartAdd;
