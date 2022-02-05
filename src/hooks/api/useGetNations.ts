import useSWR from 'swr';
import { fetcher } from 'lib/api/fetcher';

import { INation } from 'types';
import { CONTINENT } from 'constants/queryKeys';
import useRouterQuery from 'hooks/common/useRouterQuery';

function useGetNations() {
  const { getRouterQuery: getRouterContinent } = useRouterQuery(CONTINENT);
  const continentValue = getRouterContinent();
  const { data } = useSWR<INation[]>(
    continentValue
      ? `/nation-infos/?continentName=${continentValue}`
      : '/nation-infos',
    fetcher
  );

  return { data };
}

export default useGetNations;
