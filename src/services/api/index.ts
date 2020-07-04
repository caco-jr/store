import { Store } from '@interfaces/store';

let BASE_URI: string;

if (process.env.NODE_ENV !== 'production') {
  BASE_URI = 'http://localhost:3000/api';
} else {
  BASE_URI = 'http://localhost:3000/api';
}

export const getProductsAPI = (): Promise<Store> =>
  fetch(`${BASE_URI}/products`).then((response: Response) => response.json());
