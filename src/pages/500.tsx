import ErrorPage from 'components/common/ErrorPage';

function NotFound() {
  return (
    <ErrorPage errorMsg={'문제가 발생하였습니다 지속될 시 문의 부탁드립니다'} />
  );
}

export default NotFound;
