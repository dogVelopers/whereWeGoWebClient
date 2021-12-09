import { css } from '@emotion/react';

function Footer() {
  return <footer css={footerStyle}>footer</footer>;
}

export default Footer;

const footerStyle = css`
  width: 100%;
  height: 30px;
  background-color: lightgreen;
`;
