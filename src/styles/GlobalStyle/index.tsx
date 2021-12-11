import { css, Global } from '@emotion/react';

export function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
