import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartTab } from '@redux/cart/actions';

type Props = {};

const CartButton: FunctionComponent<Props> = ({}) => {
  // TODO: Arrumar o typescript
  // @ts-ignore
  const { isVisible, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const componentClassName = 'c-cart-button';

  return (
    <button
      type="button"
      className={`${componentClassName}`}
      onClick={() => dispatch(toggleCartTab())}
    >
      {items.length}
    </button>
  );
};

export default CartButton;