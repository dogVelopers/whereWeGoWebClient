import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { INation } from 'types';

interface ISelectedCardProps extends INation {}

function SelectedCard({
  id,
  image_url,
  nation_name,
  continent_name,
}: ISelectedCardProps) {
  // 여기서 nation name 기준으로 data에서 찾기
  // 매칭되는 layoutId 마다 연결하기
  return (
    <motion.div
      layoutId={`card-${id}`}
      css={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
    >
      <motion.div
        layoutId={`card-image-container-${id}`}
        css={imageContainerStyle}
      >
        <img css={imageStyle} src={image_url} alt={nation_name} />
      </motion.div>

      <motion.div
        layoutId={`card-title-container-${id}`}
        css={titleContainerStyle}
      >
        <h1 css={continentNameStyle}>{continent_name}</h1>
        <h2 css={nationNameStyle}>{nation_name}</h2>
      </motion.div>
    </motion.div>
  );
}

export default SelectedCard;

const containerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(calc(50vw - 50%)) !important;
  max-width: 428px;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: green;
  pointer-events: auto;
`;

const imageContainerStyle = css`
  position: absolute;
  width: 100%;
  height: 30%;
  overflow: hidden;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const titleContainerStyle = css`
  position: absolute;
  top: 26px;
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
