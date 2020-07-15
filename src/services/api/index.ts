import { Store, Product } from '@interfaces/store';

let BASE_URI: string;

if (process.env.NODE_ENV !== 'production') {
    BASE_URI = 'http://localhost:3000/api';
} else {
    BASE_URI = 'https://store.cacojr.vercel.app/api';
}

function CheckError(response: Response) {
    if (response.ok) {
        return response.json();
    } else {
        throw Error(response.statusText);
    }
}

export const getProductsAPI = (): Promise<Store> =>
    fetch(`${BASE_URI}/products`).then(CheckError);

export const getProductAPI = (id: string): Promise<Product> =>
    fetch(`${BASE_URI}/products/${id}`).then(CheckError);
