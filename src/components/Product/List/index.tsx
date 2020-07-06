import React, { FunctionComponent } from 'react';
import styles from './index.module.scss';

type Props = {};

const ProductList: FunctionComponent<Props> = ({ children }) => {
  return (
    <section className="container">
      <section className={styles['c-product-list']}>{children}</section>
    </section>
  );
};

export default ProductList;
