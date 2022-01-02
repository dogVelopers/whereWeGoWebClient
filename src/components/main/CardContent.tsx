import { css } from '@emotion/react';
import { INation } from 'types';

type cardContentPropsType = Pick<INation, 'introduce' | 'quarantine_policy'>;

function CardContent({ introduce, quarantine_policy }: cardContentPropsType) {
  return (
    <div css={contentWrapperStyle}>
      <p css={titleStyle}>소개</p>
      <p css={contentStyle}>{introduce}</p>
      <hr css={hrStyle} />
      <p css={titleStyle}>격리 수칙</p>
      <p css={contentStyle}>{quarantine_policy}</p>
    </div>
  );
}

export default CardContent;

const contentWrapperStyle = css`
  position: relative;
  width: 100%;
  height: auto;
  background-color: var(--bg-color);
  padding: 14px 10px 8px 10px;

  word-break: keep-all;
`;

const titleStyle = css`
  color: var(--brand-color);
  font-weight: bold;
  font-size: 0.825rem;
  margin-bottom: 8px;
`;

const contentStyle = css`
  font-size: 1rem;
`;

const hrStyle = css`
  width: 100%;
  opacity: 0.2;
  color: var(--brand-color);
  margin: 24px 0;
`;
