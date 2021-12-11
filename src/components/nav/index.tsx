import { css } from '@emotion/react';

function Nav() {
  return <nav css={navStyle}>nav</nav>;
}

export default Nav;

const navStyle = css`
  width: 100%;
  height: 60px;
`;
