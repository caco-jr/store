import React, { FunctionComponent } from 'react';

import { STORE_NAME } from '@utils/strings';
import CartToggleTab from '@components/Cart/ToggleTab';

type Props = {};

const Header: FunctionComponent<Props> = ({}) => {
  const componentClassName = 'c-header';

  return (
    <header className={componentClassName}>
      <span className={`${componentClassName}__store-name`}>{STORE_NAME}</span>

      <CartToggleTab />
    </header>
  );
};

export default Header;
