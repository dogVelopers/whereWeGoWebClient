import Link from 'next/link';

import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import { INation } from 'types';
import { defaultRightFadeInVariants } from 'constants/motions';

interface ICardProps extends INation {}

function Card({ id, imageUrl, nationName, continentName }: ICardProps) {
  return (
    <Link href={`/${nationName}`} passHref={true} scroll={false}>
      <motion.div
        layoutId={`card-${id}`}
        css={containerStyle}
        variants={defaultRightFadeInVariants}
      >
        <motion.div
          layoutId={`card-image-container-${id}`}
          css={imageContainerStyle}
          style={{ originX: 0, originY: 0 }}
        >
          <img css={imageStyle} src={imageUrl} alt={nationName} />

          <motion.div
            layoutId={`card-title-container-${id}`}
            css={titleContainerStyle}
          >
            <h1 css={continentNameStyle}>{continentName}</h1>
            <h2 css={nationNameStyle}>{nationName}</h2>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default Card;

const containerStyle = css`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 24px;
  overflow: hidden;
`;

const imageContainerStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const titleContainerStyle = (theme: Theme) => css`
  position: absolute;
  top: 14px;
  left: 14px;
  color: ${theme.color.textWhiteColor};
  text-shadow: ${theme.shadow.default};
`;

const continentNameStyle = css`
  font-size: 0.875rem;
  line-height: 100%;
  color: white;
  transition: color 0.3s;
`;

const nationNameStyle = css`
  font-size: 1.5rem;
`;
