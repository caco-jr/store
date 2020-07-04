import React, { FunctionComponent } from 'react';

import { STORE_NAME } from '@utils/strings';

type Props = {};

const Header: FunctionComponent<Props> = ({}) => {
  const componentClassName = 'c-header';

  return (
    <header className={componentClassName}>
      <span className={`${componentClassName}__store-name`}>{STORE_NAME}</span>
    </header>
  );
};

export default Header;
