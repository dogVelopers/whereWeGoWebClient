import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { motion } from 'framer-motion';
import { staggerOne, defaultRightFadeInVariants } from 'constants/motions';

import Nav from 'components/nav';
import Footer from 'components/footer';

interface IErrorPageProps {
  errorMsg: string;
}

function ErrorPage({ errorMsg }: IErrorPageProps) {
  const router = useRouter();

  function onClickMainBtn() {
    router.push('/');
  }

  return (
    <div css={container}>
      <Nav />
      <motion.div
        css={notFoundStyle}
        variants={staggerOne}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1 css={titleStyle} variants={defaultRightFadeInVariants}>
          죄송합니다
        </motion.h1>
        <motion.p css={dscStyle} variants={defaultRightFadeInVariants}>
          {errorMsg}
        </motion.p>
        <motion.button
          css={btnStyle}
          onClick={onClickMainBtn}
          variants={defaultRightFadeInVariants}
        >
          메인 페이지로 가기
        </motion.button>
      </motion.div>
      <Footer />
    </div>
  );
}

export default ErrorPage;

const container = css`
  position: relative;
  max-width: 428px;
  width: 100%;
  margin: 0 auto;
`;

const notFoundStyle = css`
  width: 100%;
  height: calc(100vh - 60px - 100px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const titleStyle = css`
  font-size: 1.25rem;
  margin-bottom: 0.125rem;
`;

const dscStyle = css`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const btnStyle = css`
  padding: 18px 22px;
  color: var(--text-white-color);
  background-color: var(--brand-color);
  border-radius: 8px;
  font-size: 0.875rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
