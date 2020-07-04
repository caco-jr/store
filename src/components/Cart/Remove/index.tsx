import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '@redux/cart/actions';

type Props = {
  id: string;
  text?: string;
};

const CartRemove: FunctionComponent<Props> = ({ id, text }) => {
  const componentClassName = 'c-cart-remove';
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={componentClassName}
      onClick={() => dispatch(removeFromCart(id))}
    >
      {text}
    </button>
  );
};

CartRemove.defaultProps = {
  text: 'Remover do carrinho',
};

export default CartRemove;
