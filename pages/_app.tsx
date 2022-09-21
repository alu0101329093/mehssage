import '../styles/globals.css';
import type { AppProps } from 'next/app';
import initAuth from '../initAuth';
import '../configFirebase';

initAuth();

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
