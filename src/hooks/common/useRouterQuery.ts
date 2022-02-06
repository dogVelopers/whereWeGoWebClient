import { useRouter } from 'next/router';

function useRouterQuery(key: string) {
  const router = useRouter();

  function getRouterQuery() {
    return router.query[key];
  }

  function setRouterQuery(value: string) {
    const nextQuery = { ...router.query, [key]: value };
    router.push({ pathname: router.pathname, query: nextQuery });
  }

  function clearRouterQuery() {
    delete router.query[key];
    router.push(router.pathname, { query: router.query });
  }

  return { getRouterQuery, setRouterQuery, clearRouterQuery };
}

export default useRouterQuery;
