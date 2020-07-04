import React, { FunctionComponent } from 'react';
import { Product } from '@interfaces/store';
import { useDispatch } from 'react-redux';

import { addToCart } from '@redux/cart/actions';

type Props = {
  text?: string;
  product: Product;
};

const CartAdd: FunctionComponent<Props> = ({ text, product }) => {
  const componentClassName = 'c-cart-add';
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={componentClassName}
      onClick={() => dispatch(addToCart(product))}
    >
      {text}
    </button>
  );
};

CartAdd.defaultProps = {
  text: 'Adicionar ao carrinho',
};

export default CartAdd;
