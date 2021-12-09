import { css } from '@emotion/react';

function Home() {
  return <main css={wrapper}></main>;
}

export default Home;

const wrapper = css`
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
`;
