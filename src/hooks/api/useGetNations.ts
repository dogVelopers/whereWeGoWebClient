import useSWR from 'swr';
import { fetcher } from 'lib/api/fetcher';
import { INation } from 'types';

function useGetNations() {
  const { data, error } = useSWR<INation[]>('/nations', fetcher);

  return { data, error };
}

export default useGetNations;
