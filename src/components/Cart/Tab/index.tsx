import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import CartToggleTab from '../ToggleTab';

type Props = {};

const CartTab: FunctionComponent<Props> = ({}) => {
  // TODO: Arrumar o typescript
  // @ts-ignore
  const { isVisible, items } = useSelector((state) => state.cart);

  const componentClassName = 'c-cart-tab';

  return (
    <section
      className={`${componentClassName} ${componentClassName}--${
        isVisible ? 'visible' : 'hidden'
      }`}
    >
      <header>
        <CartToggleTab />

        <span>Sacola</span>
      </header>
    </section>
  );
};

export default CartTab;
