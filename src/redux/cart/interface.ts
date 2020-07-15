import { Product } from '@interfaces/store';

export interface CartReducer {
    isVisible: boolean;
    items: Product[];
}
