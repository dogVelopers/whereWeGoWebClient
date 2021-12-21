import { Component, ReactNode } from 'react';
import ErrorPage from './ErrorPage';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
  errorMsg: string | null;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IState> {
  state: IState = {
    hasError: false,
    errorMsg: null,
  };

  static getDerivedStateFromError(error: Error): IState {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error: Error) {
    console.error('Uncaught error:', error.message);
    console.error(this.state.errorMsg); // 추후에 Sentry 부착
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          errorMsg={'문제가 발생하였습니다 지속될 시 문의 부탁드립니다'}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
