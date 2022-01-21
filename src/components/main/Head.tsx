import NextHead from 'next/head';
import { useRouter } from 'next/router';

const defaultTitle: string = '자유여행 국가 보기, 우리 어디가?';

function Head() {
  const router = useRouter();
  const { nation: queryNation } = router.query;

  return (
    <NextHead>
      <title>
        {typeof queryNation === 'undefined'
          ? defaultTitle
          : `우리 어디가? ${queryNation}`}
      </title>
    </NextHead>
  );
}

export default Head;
