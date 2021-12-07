import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from 'styles/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
