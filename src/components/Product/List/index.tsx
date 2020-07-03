import React, { FunctionComponent } from 'react';
import './index.scss';

type Props = {};

const ProductList: FunctionComponent<Props> = ({ children }) => {
  const componentClassName = 'c-product-list';

  return (
    <section className="container">
      <section className={componentClassName}>{children}</section>
    </section>
  );
};

export default ProductList;
