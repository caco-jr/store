import React, { FunctionComponent } from 'react';

import CartRemove from '@components/Cart/Remove';

type Props = {
  id: number;
  title: string;
};

const CartProduct: FunctionComponent<Props> = ({ id, title }) => {
  const componentClassName = 'c-cart-product';

  return (
    <article className={componentClassName}>
      <span className={`${componentClassName}__title`}>{title}</span>

      <CartRemove id={`${id}`} />
    </article>
  );
};

export default CartProduct;
