import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import styles from './index.module.scss';
import CartToggleTab from '@components/Cart/ToggleTab';
import CartProduct from '@components/Cart/Product';
import { ReduxStore } from '@redux/store/interface';

type Props = {};

const CartTab: FunctionComponent<Props> = ({}) => {
  const { isVisible, items } = useSelector((state: ReduxStore) => state.cart);

  return (
    <section
      className={`${styles['c-cart-tab']} ${
        isVisible ? styles['m-visible'] : styles['m-hidden']
      }`}
    >
      <header className={styles['header']}>
        <CartToggleTab mode="dark" />

        <span className={styles['header-title']}>Sacola</span>
      </header>

      <section className={styles['body']} data-testid="cart-tab-content">
        {items.length > 0 ? (
          items.map((item, index) => <CartProduct {...item} key={index} />)
        ) : (
          <span className={styles['empty-bag']}>
            Nenhum item adicionado no carrinho
          </span>
        )}
      </section>
    </section>
  );
};

export default CartTab;
