import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import useGetNations from 'hooks/api/useGetNations';
import Card from 'components/main/Card';
import Loading from 'components/common/Loading';
import { staggerHalf } from 'constants/motions';
import { INation } from 'types';
import SelectedCard from './SelectedCard';

function Main() {
  const { data } = useGetNations();

  const router = useRouter();
  const { nation: queryNation } = router.query;

  return (
    <AnimatePresence exitBeforeEnter>
      {!data ? (
        <Loading key="loading" />
      ) : (
        <motion.main
          key="loaded"
          css={mainStyle}
          variants={staggerHalf}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <AnimateSharedLayout>
            {data.map((nation) => (
              <Card
                key={nation.id}
                isSelected={nation.nation_name === queryNation}
                {...nation}
              />
            ))}

            <AnimatePresence>{queryNation && <SelectedCard />}</AnimatePresence>
          </AnimateSharedLayout>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default Main;

const mainStyle = css`
  position: relative;
  width: 100%;
  height: 200vh;
  margin-top: 6px;
  padding: var(--layout-padding);

  display: flex;
  flex-direction: column;
  gap: 12px;
`;
