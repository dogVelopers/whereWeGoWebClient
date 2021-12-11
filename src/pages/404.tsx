import { css } from '@emotion/react';
import Nav from 'components/nav';
import Footer from 'components/footer';

function NotFound() {
  return (
    <div css={container}>
      <Nav />
      <div css={notFoundStyle}>
        <h1>죄송합니다</h1>
        <h2>해당 페이지를 찾을 수 없습니다</h2>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;

const container = css`
  position: relative;
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
`;

const notFoundStyle = css`
  width: 100%;
  height: calc(100vh - 60px - 100px);
`;
