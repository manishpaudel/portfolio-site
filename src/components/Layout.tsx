import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        {/* Your header content */}
      </header>

      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
