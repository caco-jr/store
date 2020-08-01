import React, { ReactNode, FunctionComponent } from 'react';
import Head from 'next/head';

import styles from './index.module.scss';
import Header from '@components/Header';
import { STORE_NAME } from '@utils/strings';
import CartTab from '@components/Cart/Tab';
import Footer from '@components/Footer';

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
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/static/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/static/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
      />

      <script
        async
        src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.15/pwacompat.min.js"
        crossOrigin="anonymous"
      />
    </Head>

    <Header />

    <CartTab />

    <main className={styles['main']}>{children}</main>

    <Footer />
  </>
);

Layout.defaultProps = {
  title: STORE_NAME,
};

export default Layout;
