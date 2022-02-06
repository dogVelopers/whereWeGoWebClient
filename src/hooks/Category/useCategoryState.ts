import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

type routerQueryType = string | string[] | undefined;

interface IUseCategoryStateProps {
  getRouterQuery: () => routerQueryType;
  defaultValue: string;
}

function useCategoryState({
  getRouterQuery,
  defaultValue,
}: IUseCategoryStateProps) {
  const getQueryDefaultWhenUndefined = useCallback(() => {
    const routerQuery = getRouterQuery();
    return typeof routerQuery === 'undefined' ? defaultValue : routerQuery;
  }, [defaultValue, getRouterQuery]);

  const [query, setQuery] = useState<routerQueryType>(
    getQueryDefaultWhenUndefined()
  );
  const { asPath } = useRouter();

  useEffect(() => {
    setQuery(getQueryDefaultWhenUndefined());
  }, [asPath, getQueryDefaultWhenUndefined]);

  return {
    query,
  };
}

export default useCategoryState;
