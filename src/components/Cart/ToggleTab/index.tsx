import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartTab } from '@redux/cart/actions';
import { ReduxStore } from '@redux/store/interface';

type Props = {};

const CartToggleTab: FunctionComponent<Props> = ({}) => {
  const { isVisible, items } = useSelector((state: ReduxStore) => state.cart);
  const dispatch = useDispatch();

  const componentClassName = 'c-cart-toggle-tab';

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

export default CartToggleTab;
