import { useRouter } from 'next/router';
import { pageview } from 'lib/ga';
import { useEffect } from 'react';

function useGaPageview() {
  const router = useRouter();
  useEffect(() => {
    function handleRouteChange(url: string) {
      pageview(url);
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}

export default useGaPageview;
