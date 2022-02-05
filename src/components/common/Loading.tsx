import { css, keyframes, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultRightFadeInVariants } from 'constants/motions';

function Loading() {
  return (
    <motion.div
      css={wrapperStyle}
      variants={defaultRightFadeInVariants}
      animate="animate"
      exit="exit"
    >
      <span css={spinnerStyle}></span>
    </motion.div>
  );
}

export default Loading;

const wrapperStyle = (theme: Theme) => css`
  width: 100%;
  height: 100vh;
  background-color: ${theme.color.bgColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinnerAnimation = keyframes`
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
`;

const spinnerStyle = (theme: Theme) => css`
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 12px rgba(148, 187, 255, 0.2);
  border-top: solid 12px ${theme.color.brandColor};
  animation: ${spinnerAnimation} 1.5s infinite;
`;
