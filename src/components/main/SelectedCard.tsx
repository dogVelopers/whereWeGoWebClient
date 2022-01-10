import { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { motion, useMotionValue } from 'framer-motion';

import { INation } from 'types';
import { selectedCardDragTransition } from 'constants/motions';
import useSelectedCardDrag from 'hooks/useSelectedCardDrag';
import CardContent from 'components/main/CardContent';

const OVERLAY_ID: string = 'overlay';

interface ISelectedCardProps extends INation {}

function SelectedCard({
  id,
  imageUrl,
  nationName,
  continentName,
  introduce,
  quarantinePolicy,
}: ISelectedCardProps) {
  const router = useRouter();

  function onClickBackDrop(e: MouseEvent<HTMLDivElement>) {
    if (!(e.target as HTMLDivElement).id) return;
    const { id } = e.target as HTMLDivElement;

    if (id !== OVERLAY_ID) return;
    router.push('/');
  }

  const y = useMotionValue(0);
  function dragTransitionEndCallback() {
    router.push('/');
  }
  const { debouncedSwipeToDismiss, onDragTransitionEnd } = useSelectedCardDrag({
    y,
    dragTransitionEndCallback,
  });

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
        <motion.div
          css={cardContainerStyle}
          layoutId={`card-${id}`}
          drag="y"
          style={{ y }}
          dragTransition={selectedCardDragTransition}
          dragSnapToOrigin={true}
          onDrag={debouncedSwipeToDismiss}
          onDragTransitionEnd={onDragTransitionEnd}
        >
          <motion.div
            layoutId={`card-image-container-${id}`}
            css={imageContainerStyle}
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

          <CardContent
            introduce={introduce}
            quarantinePolicy={quarantinePolicy}
          />
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
  width: 100vw;
  height: 100vh;
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
  overflow-y: scroll;
`;

const imageContainerStyle = css`
  position: sticky;
  top: 0;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
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
