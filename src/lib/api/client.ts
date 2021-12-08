import axios from 'axios';

const instance = axios.create({ baseURL: 'https://localhost:8085' });

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}
