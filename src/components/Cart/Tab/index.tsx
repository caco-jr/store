import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import './index.scss';
import CartToggleTab from '@components/Cart/ToggleTab';
import CartProduct from '@components/Cart/Product';
import { ReduxStore } from '@redux/store/interface';

type Props = {};

const CartTab: FunctionComponent<Props> = ({}) => {
  const { isVisible, items } = useSelector((state: ReduxStore) => state.cart);

  const componentClassName = 'c-cart-tab';

  return (
    <section
      className={`${componentClassName} ${componentClassName}--${
        isVisible ? 'visible' : 'hidden'
      }`}
    >
      <header className={`${componentClassName}__header`}>
        <CartToggleTab mode="dark" />

        <span className={`${componentClassName}__header-title`}>Sacola</span>
      </header>

      <section
        className={`${componentClassName}__body`}
        data-testid="cart-tab-content"
      >
        {items.length > 0 ? (
          items.map((item, index) => <CartProduct {...item} key={index} />)
        ) : (
          <span className={`${componentClassName}__empty-bag`}>
            Nenhum item adicionado no carrinho
          </span>
        )}
      </section>
    </section>
  );
};

export default CartTab;
