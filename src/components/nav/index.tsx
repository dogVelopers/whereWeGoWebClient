import Image from 'next/image';
import { css } from '@emotion/react';

function Nav() {
  return (
    <nav css={navStyle}>
      <div css={logoWrapperStyle}></div>
    </nav>
  );
}

export default Nav;

const navStyle = css`
  position: sticky;
  top: 0;

  width: 100%;
  height: 60px;
  padding: 4px 6px;
  border: solid 1px black;

  display: flex;
  align-items: center;
`;

const logoWrapperStyle = css`
  width: 160px;
  height: 100%;
  background-color: green;
`;
