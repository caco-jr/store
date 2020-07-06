import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';
import { toggleCartTab } from '@redux/cart/actions';
import { ReduxStore } from '@redux/store/interface';
import CartIcon from '@icons/Cart';
import BackIcon from '@icons/Back';

type Props = {
  mode?: 'dark' | 'light';
};

const CartToggleTab: FunctionComponent<Props> = ({ mode }) => {
  const { isVisible, items } = useSelector((state: ReduxStore) => state.cart);
  const dispatch = useDispatch();

  const componentClassName = 'c-cart-toggle-tab';

  return (
    <button
      type="button"
      className={`${componentClassName} ${componentClassName}--${mode}`}
      onClick={() => dispatch(toggleCartTab())}
    >
      {isVisible && (
        <BackIcon
          width="16"
          height="16"
          className={`${componentClassName}__icon ${componentClassName}__icon--back`}
        />
      )}

      <CartIcon
        className={`${componentClassName}__icon  ${componentClassName}__icon--cart`}
      />

      <span className={`${componentClassName}__length`}>{items.length}</span>
    </button>
  );
};

CartToggleTab.defaultProps = {
  mode: 'light',
};

export default CartToggleTab;
