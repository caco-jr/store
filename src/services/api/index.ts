import { Store } from '../../interfaces';

let BASE_URI: string;

if (process.env.NODE_ENV !== 'production') {
  BASE_URI = 'http://localhost:3000/api';
} else {
  BASE_URI = 'http://localhost:3000/api';
}

export const getStoreAPI = (): Promise<Store> =>
  fetch(`${BASE_URI}/store`).then((response: Response) => response.json());
