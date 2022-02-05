import { useRouter } from 'next/router';

function useRouterQuery(key: string) {
  const router = useRouter();

  function getRouterQuery() {
    return router.query[key];
  }

  function setRouterQuery(value: string) {
    router.push(router.pathname, { query: { [key]: value } });
  }

  return { getRouterQuery, setRouterQuery };
}

export default useRouterQuery;
