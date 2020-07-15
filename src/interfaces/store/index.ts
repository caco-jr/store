export interface Store {
    products: Product[];
}

export interface Product {
    id: number;
    sku: number;
    title: string;
    description: string;
    availableSizes: string[];
    style: string;
    price: number;
    installments: number;
    currencyId: 'BRL' | 'USD' | 'EUR';
    currencyFormat: string;
    isFreeShipping: boolean;
    featuredMedia: FeaturedMedia;
}

export interface FeaturedMedia {
    baseURI: string;
    params?: {
        ims: string;
        ts?: string;
    };
}
