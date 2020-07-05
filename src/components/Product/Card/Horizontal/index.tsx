import React, { FunctionComponent } from 'react';
import CartRemove from '@components/Cart/Remove';

type Props = {
  id: number;
  title: string;
};

const ProductCardHorizontal: FunctionComponent<Props> = ({ id, title }) => {
  const componentClassName = 'c-product-card-horizontal';

  return (
    <article className={componentClassName}>
      <span className={`${componentClassName}__title`}>{title}</span>

      <CartRemove id={`${id}`} />
    </article>
  );
};

export default ProductCardHorizontal;
