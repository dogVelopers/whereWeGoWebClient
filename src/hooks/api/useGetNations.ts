import useSWR from 'swr';
import { fetcher } from 'lib/api/fetcher';

function useGetNations() {
  const { data } = useSWR('/nations', fetcher);

  return { data };
}

export default useGetNations;
