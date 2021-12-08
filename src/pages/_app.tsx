import { AppProps } from 'next/app';
import Head from 'next/head';

import { RecoilRoot } from 'recoil';

import { SWRConfig } from 'swr';
import swrConfig from 'lib/swrConfig';

import { GlobalStyle } from 'styles/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SWRConfig value={swrConfig}>
        <Head>
          <title>자유여행 국가 보기, 우리 어디가?</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </RecoilRoot>
  );
}

export default App;
