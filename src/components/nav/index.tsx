import Image from 'next/image';

import { css } from '@emotion/react';

import { motion } from 'framer-motion';
import { logoVariants } from 'constants/motions';

function Nav() {
  return (
    <nav css={navStyle}>
      <div css={logoWrapperStyle}>
        <div css={logoStyle}>
          <Image src="/icon.svg" alt="logo icon" layout="fill" />
        </div>
        <motion.div
          css={textLogoStyle}
          variants={logoVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image src="/textLogo.svg" alt="logo icon" layout="fill" />
          <Image
            className="overlay"
            src="/textLogoColor.svg"
            alt="logo icon"
            layout="fill"
          />
        </motion.div>
      </div>
    </nav>
  );
}

export default Nav;

const navStyle = css`
  position: sticky;
  top: 0;

  width: 100%;
  height: 60px;
  padding: 4px 6px;

  display: flex;
  background-color: white;
`;

const logoWrapperStyle = css`
  display: flex;
  cursor: pointer;

  & .overlay {
    position: absolute;
    opacity: 0;
    filter: blur(3px);
    transition: opacity 0.3s, filter 1s;
  }

  &:hover .overlay {
    opacity: 1;
    filter: blur(0px);
  }
`;

const logoStyle = css`
  position: relative;
  width: 40px;
  height: 50px;
`;

const textLogoStyle = css`
  position: relative;
  width: 94px;
  height: 50px;
`;
