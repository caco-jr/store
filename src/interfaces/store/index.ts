export type Store = {
  products: Cart[];
};

type Cart = {
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
};