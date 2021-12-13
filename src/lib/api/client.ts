import axios from 'axios';

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}
