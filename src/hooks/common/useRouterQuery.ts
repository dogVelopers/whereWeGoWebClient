import { useRouter } from 'next/router';

function useRouterQuery(key: string) {
  const router = useRouter();

  function getRouterQuery() {
    const query = new URLSearchParams(router.asPath.slice(1));
    return query.get(key);
  }

  function setRouterQuery(value: string) {
    const nextQuery = { ...router.query, [key]: value };
    router.query = nextQuery;
    router.push(router.pathname, { query: nextQuery });
  }

  function clearRouterQuery() {
    Object.keys(router.query).filter((queryKey) => queryKey !== key);

    router.push(router.pathname, { query: router.query });
  }

  return { getRouterQuery, setRouterQuery, clearRouterQuery };
}

export default useRouterQuery;
