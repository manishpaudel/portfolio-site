import React from 'react';
import '../styles/global.css'; // Import global styles
import Layout from '../components/Layout';

interface AppProps {
  Component: React.FC;
  pageProps: any;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
