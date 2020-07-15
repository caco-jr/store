import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import styles from './index.module.scss';
import CartToggleTab from '@components/Cart/ToggleTab';
import CartProduct from '@components/Cart/Product';
import { ReduxStore } from '@redux/store/interface';
import { getPriceObject } from '@utils/price';

type Props = {};

const CartTab: FunctionComponent<Props> = ({}) => {
    const { isVisible, items } = useSelector((state: ReduxStore) => state.cart);

    const { priceInteger, priceFraction } = getPriceObject(
        items?.reduce((accumulator, current) => current.price + accumulator, 0)
    );

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
                {items?.length > 0 ? (
                    items.map((item, index) => (
                        <CartProduct {...item} key={index} />
                    ))
                ) : (
                    <span className={styles['empty-bag']}>
                        Nenhum item adicionado no carrinho
                    </span>
                )}
            </section>

            {items?.length && (
                <section className={styles['cart-total-price']}>
                    <span className={styles['price-text']}>Subtotal</span>

                    <div className={styles['price']}>
                        <span className={styles['currency-format']}>R$</span>

                        <span
                            className={styles['price-integer']}
                            data-testid="price-integer"
                        >
                            {priceInteger}
                        </span>

                        <span
                            className={styles['price-fraction']}
                            data-testid="price-fraction"
                        >
                            ,{priceFraction}
                        </span>
                    </div>
                </section>
            )}
        </section>
    );
};

export default CartTab;
