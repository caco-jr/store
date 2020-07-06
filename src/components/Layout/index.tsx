import React, { ReactNode, FunctionComponent } from 'react';
import Head from 'next/head';

import Header from '@components/Header';
import { STORE_NAME } from '@utils/strings';
import CartTab from '@components/Cart/Tab';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: FunctionComponent<Props> = ({ children, title }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
      />
    </Head>

    <Header />

    <CartTab />

    <main>{children}</main>
  </>
);

Layout.defaultProps = {
  title: STORE_NAME,
};

export default Layout;
