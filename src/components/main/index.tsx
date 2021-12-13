import { css } from '@emotion/react';

function Main() {
  return <main css={mainStyle}>for Each something</main>;
}

export default Main;

const mainStyle = css`
  width: 100%;
  height: 200vh;
`;
