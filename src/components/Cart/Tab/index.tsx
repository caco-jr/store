import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import CartToggleTab from '@components/Cart/ToggleTab';
import ProductCardHorizontal from '@components/Product/Card/Horizontal';

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

        {items.length > 0 ? (
          items.map((item, index) => (
            <ProductCardHorizontal {...item} key={index} />
          ))
        ) : (
          <span className={`${componentClassName}__empty-bag`}>
            Nenhum item adicionado no carrinho
          </span>
        )}
      </header>
    </section>
  );
};

export default CartTab;
