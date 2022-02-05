import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { INation } from 'types';
import { staggerHalf } from 'constants/motions';
import useGetNations from 'hooks/api/useGetNations';
import Card from 'components/main/Card';
import Loading from 'components/common/Loading';
import SelectedCard from 'components/main/SelectedCard';

function Main() {
  const { data } = useGetNations();

  const router = useRouter();
  const { nation: queryNation } = router.query;

  const [selectedNation, setSelectedNation] = useState<INation | null>(null);

  useEffect(() => {
    if (!data) return;
    if (!queryNation) {
      setSelectedNation(null);
      return;
    }

    data.forEach((eachNation) => {
      if (eachNation.nationName === queryNation) {
        setSelectedNation(eachNation);
      }
    });
  }, [data, queryNation]);

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
              <Card key={nation.id} {...nation} />
            ))}

            <AnimatePresence>
              {selectedNation && <SelectedCard {...selectedNation} />}
            </AnimatePresence>
          </AnimateSharedLayout>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default Main;

const mainStyle = (theme: Theme) => css`
  position: relative;
  width: 100%;
  margin-top: 6px;
  padding: ${theme.padding.layoutPadding};

  display: flex;
  flex-direction: column;
  gap: 12px;
`;
