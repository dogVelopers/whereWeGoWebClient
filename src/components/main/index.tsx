import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import useGetNations from 'hooks/api/useGetNations';
import Card from 'components/main/Card';
import Loading from 'components/common/Loading';
import { defaultRightFadeInVariants } from 'constants/motions';

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
          variants={defaultRightFadeInVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {data.map((nation) => (
            <Card
              key={nation.id}
              isSelected={queryNation === nation.nation_name}
              {...nation}
            />
          ))}
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default Main;

const mainStyle = css`
  width: 100%;
  height: 200vh;
`;
