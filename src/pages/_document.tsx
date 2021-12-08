import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class WhereWeGoDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* <link rel="icon" href="/아이콘.ico" />
          <meta property="og:image" content="/이미지.png" /> */}

          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta
            property="og:title"
            content="우리 어디가? - 자유여행 가능 국가 보기 "
          />
          <meta
            property="og:description"
            content="[우리 어디가?]는 현재 시국에 자유여행이 가능한 국가를 보여주는 서비스입니다 😀"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WhereWeGoDocument;
