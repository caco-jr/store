import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './index.module.scss';
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

    return (
        <button
            type="button"
            className={`${styles['c-cart-toggle-tab']} ${styles['m-' + mode]}`}
            onClick={() => dispatch(toggleCartTab())}
        >
            {isVisible && (
                <BackIcon
                    width="16"
                    height="16"
                    className={`${styles['icon']} ${styles['m-back']}`}
                />
            )}

            <CartIcon className={`${styles['icon']} ${styles['m-cart']}`} />

            <span className={styles['length']}>{items.length}</span>
        </button>
    );
};

CartToggleTab.defaultProps = {
    mode: 'light',
};

export default CartToggleTab;
