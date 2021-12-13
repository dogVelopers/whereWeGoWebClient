import { css } from '@emotion/react';
import useGetNations from 'hooks/api/useGetNations';

function Main() {
  const { data, error } = useGetNations();

  if (error) return <div>error</div>;
  if (!data) return <div>loading</div>;
  return (
    <main css={mainStyle}>
      {data.map((nation) => (
        <div key={nation.id}>
          <h1>{nation.nation_name}</h1>
          <p>{nation.introduce}</p>
          <p>{nation.quarantine_policy}</p>
        </div>
      ))}
    </main>
  );
}

export default Main;

const mainStyle = css`
  width: 100%;
  height: 200vh;
`;
