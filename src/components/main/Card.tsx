import Link from 'next/link';

import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { INation } from 'types';
import { defaultRightFadeInVariants } from 'constants/motions';

interface ICardProps extends INation {}

function Card({ id, image_url, nation_name, continent_name }: ICardProps) {
  return (
    <Link href={`/${nation_name}`} passHref={true} scroll={false}>
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
          <img css={imageStyle} src={image_url} alt={nation_name} />

          <motion.div
            layoutId={`card-title-container-${id}`}
            css={titleContainerStyle}
          >
            <h1 css={continentNameStyle}>{continent_name}</h1>
            <h2 css={nationNameStyle}>{nation_name}</h2>
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

const titleContainerStyle = css`
  position: absolute;
  top: 14px;
  left: 14px;
  color: var(--text-white-color);
  text-shadow: var(--default-shadow);
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
