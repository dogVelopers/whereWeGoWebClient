import { css } from '@emotion/react';
import useGetNations from 'hooks/api/useGetNations';

function Main() {
  const { data } = useGetNations();
  console.log(data);
  return <main css={mainStyle}>for Each something</main>;
}

export default Main;

const mainStyle = css`
  width: 100%;
  height: 200vh;
`;
