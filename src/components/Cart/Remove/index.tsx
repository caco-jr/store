import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import styles from './index.module.scss';
import { removeFromCart } from '@redux/cart/actions';
import CloseIcon from '@icons/Close';

type Props = {
    id: string;
    className?: string;
};

const CartRemove: FunctionComponent<Props> = ({ id, className }) => {
    const dispatch = useDispatch();

    return (
        <button
            type="button"
            className={`${styles['c-cart-remove']} ${className}`}
            onClick={() => dispatch(removeFromCart(id))}
        >
            <CloseIcon className={styles['icon']} width="16" height="16" />
        </button>
    );
};

CartRemove.defaultProps = {
    className: '',
};

export default CartRemove;
