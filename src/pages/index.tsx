import { css } from '@emotion/react';

import Nav from 'components/nav';
import Main from 'components/main';
import Footer from 'components/footer';

function Home() {
  return (
    <div css={container}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;

const container = css`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
`;
