import { css, Theme } from '@emotion/react';
import { INation } from 'types';

type cardContentPropsType = Pick<INation, 'introduce' | 'quarantinePolicy'>;

function CardContent({ introduce, quarantinePolicy }: cardContentPropsType) {
  return (
    <div css={contentWrapperStyle}>
      <p css={titleStyle}>소개</p>
      <p css={contentStyle}>{introduce}</p>
      <hr css={hrStyle} />
      <p css={titleStyle}>격리 수칙</p>
      <p css={contentStyle}>{quarantinePolicy}</p>
    </div>
  );
}

export default CardContent;

const contentWrapperStyle = (theme: Theme) => css`
  position: relative;
  width: 100%;
  height: auto;
  background-color: ${theme.color.bgColor};
  padding: 14px 10px 8px 10px;

  word-break: keep-all;
`;

const titleStyle = (theme: Theme) => css`
  color: ${theme.color.brandColor};
  font-weight: bold;
  font-size: 0.825rem;
  margin-bottom: 8px;
`;

const contentStyle = css`
  font-size: 1rem;
`;

const hrStyle = (theme: Theme) => css`
  width: 100%;
  opacity: 0.2;
  color: ${theme.color.brandColor};
  margin: 24px 0;
`;
