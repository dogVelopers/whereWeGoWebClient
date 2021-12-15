import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

const responseInterceptorFulfilled = (res: AxiosResponse) => {
  if (200 <= res.status && res.status < 300) return res.data;

  return Promise.reject(res.data);
};

const responseInterceptorRejected = (error: AxiosError) => {
  return new Error(error.response?.data ?? error);
};

instance.interceptors.response.use(
  responseInterceptorFulfilled,
  responseInterceptorRejected
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}
