import { css } from '@emotion/react';

import Nav from 'components/nav';
import Main from 'components/main';
import Footer from 'components/footer';
import Head from 'components/main/Head';
import ErrorBoundary from 'components/common/ErrorBoundary';

function Home() {
  return (
    <div css={container}>
      <ErrorBoundary>
        <Head />
        <Nav />
        <Main />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default Home;

const container = css`
  position: relative;
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
`;
