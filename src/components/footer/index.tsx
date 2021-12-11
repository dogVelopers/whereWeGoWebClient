import { css } from '@emotion/react';

function Footer() {
  return (
    <footer css={footerStyle}>
      <h1 css={titleStyle}>FESPA</h1>
      <p css={copyrightStyle}>copyright &copy; 2021 by FESPA</p>
    </footer>
  );
}

export default Footer;

const footerStyle = css`
  width: 100%;
  height: 100px;
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  padding: var(--layout-padding);
`;

const titleStyle = css`
  font-size: 1.125rem;
`;

const copyrightStyle = css`
  font-size: 0.725rem;
`;
