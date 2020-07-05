import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import './index.scss';
import { STORE_NAME } from '@utils/strings';
import CartToggleTab from '@components/Cart/ToggleTab';
import { getHomeURI } from '@utils/URIs/pages';

type Props = {};

const Header: FunctionComponent<Props> = ({}) => {
  const componentClassName = 'c-header';

  return (
    <header className={componentClassName}>
      <section className={`container ${componentClassName}__container`}>
        <Link href={getHomeURI()}>
          <span className={`${componentClassName}__store-name`}>
            {STORE_NAME}
          </span>
        </Link>

        <CartToggleTab />
      </section>
    </header>
  );
};

export default Header;
