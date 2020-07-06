import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import './index.scss';
import { removeFromCart } from '@redux/cart/actions';
import CloseIcon from '@icons/Close';

type Props = {
  id: string;
};

const CartRemove: FunctionComponent<Props> = ({ id }) => {
  const componentClassName = 'c-cart-remove';
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={componentClassName}
      onClick={() => dispatch(removeFromCart(id))}
    >
      <CloseIcon
        className={`${componentClassName}__icon`}
        width="16"
        height="16"
      />
    </button>
  );
};

export default CartRemove;
