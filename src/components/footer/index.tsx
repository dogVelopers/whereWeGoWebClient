import { css, Theme } from '@emotion/react';

function Footer() {
  return (
    <footer css={footerStyle}>
      <h1 css={titleStyle}>FESPA</h1>
      <p css={copyrightStyle}>copyright &copy; 2022 by FESPA</p>
    </footer>
  );
}

export default Footer;

const footerStyle = (theme: Theme) => css`
  width: 100%;
  height: 100px;
  background-color: ${theme.color.footerBgColor};
  color: ${theme.color.footerTextColor};
  padding: ${theme.padding.layoutPadding};
`;

const titleStyle = css`
  font-size: 1.125rem;
`;

const copyrightStyle = css`
  font-size: 0.725rem;
`;
