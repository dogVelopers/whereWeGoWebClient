import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultRightFadeInVariants } from 'constants/motions';
import { INation } from 'types';

interface ICardProps extends INation {
  isSelected: boolean;
}

function Card({
  isSelected,
  nation_name,
  continent_name,
  image_url,
  introduce,
  quarantine_policy,
}: ICardProps) {
  return (
    <motion.div css={containerStyle} variants={defaultRightFadeInVariants}>
      <div css={imageContainerStyle}>
        <img css={imageStyle} src={image_url} alt={nation_name} />

        <div css={titleContainerStyle}>
          <h1 css={continentNameStyle}>{continent_name}</h1>
          <h2 css={nationNameStyle}>{nation_name}</h2>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;

const containerStyle = css`
  width: 100%;
  height: 200px;
`;

const imageContainerStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
`;

const nationNameStyle = css`
  font-size: 1.5rem;
`;
