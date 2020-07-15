import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import styles from './index.module.scss';
import { STORE_NAME } from '@utils/strings';
import CartToggleTab from '@components/Cart/ToggleTab';
import { getHomeURI } from '@utils/URIs/pages';

type Props = {};

const Header: FunctionComponent<Props> = ({}) => {
    return (
        <header className={styles['c-header']}>
            <section className={`${styles['wrapper']} container`}>
                <Link {...getHomeURI()}>
                    <span className={styles['store-name']}>{STORE_NAME}</span>
                </Link>

                <CartToggleTab mode="dark" />
            </section>
        </header>
    );
};

export default Header;
