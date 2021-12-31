import { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { INation } from 'types';

const OVERLAY_ID: string = 'overlay';

interface ISelectedCardProps extends INation {}

function SelectedCard({
  id,
  image_url,
  nation_name,
  continent_name,
}: ISelectedCardProps) {
  const router = useRouter();

  function onClickBackDrop(e: MouseEvent<HTMLDivElement>) {
    const { id } = e.target as HTMLDivElement;

    if (id !== OVERLAY_ID) return;
    router.push('/');
  }

  return (
    <>
      <motion.div
        css={backdropStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
      ></motion.div>

      <div css={containerStyle} id={OVERLAY_ID} onClick={onClickBackDrop}>
        <motion.div layoutId={`card-${id}`} css={cardContainerStyle}>
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
      </div>
    </>
  );
}

export default SelectedCard;

const backdropStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const containerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 80px 0;
  overflow: hidden;
  z-index: 999;
`;

const cardContainerStyle = css`
  position: relative;
  margin: 0 auto;
  max-width: 428px;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
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
