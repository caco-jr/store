import { Store } from '@interfaces/store/index';

export const mockStoreData: Store = {
  products: [
    {
      id: 0,
      sku: 8552515751438644,
      title: 'Camisa São Paulo I',
      description: '20/21 s/nº',
      availableSizes: ['S', 'G', 'GG', 'GGG'],
      style: 'Branco com listras pretas',
      price: 229.9,
      installments: 9,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/camisa-sao-paulo-i-2021-sn-c-patrocinio-torcedor-adidas-masculina/24/NQQ-1065-024/NQQ-1065-024_zoom1.jpg',
        params: {
          ts: '1584616638',
          ims: '544x',
        },
      },
    },

    {
      id: 1,
      sku: 18644119330491312,
      title: 'Camisa Nike Corinthians II',
      description: '19/20 s/nº',
      availableSizes: ['S', 'G', 'GG', 'GGG'],
      style: 'Preta com listras brancas',
      price: 229.9,
      installments: 9,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/camisa-corinthians-ii-1920-sn-torcedor-nike-masculina/26/HZM-1596-026/HZM-1596-026_zoom1.jpg',
        params: {
          ts: '1562351676',
          ims: '544x',
        },
      },
    },

    {
      id: 2,
      sku: 11854078013954528,
      title: 'Camisa Liga Retrô Holanda 1974 Feminino',
      description: '14/15 s/nº',
      availableSizes: ['S', 'G'],
      style: 'Laranja',
      price: 199.9,
      installments: 7,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/camisa-liga-retro-holanda-1974-feminino/42/395-6678-042/395-6678-042_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 3,
      sku: 876661122392077,
      title: 'Camisa Liverpool Watros Masculina',
      description: '',
      availableSizes: ['S', 'G'],
      style: 'Vermelho',
      price: 79.9,
      installments: 1,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/camisa-liverpool-watros-masculina/16/D65-2730-016/D65-2730-016_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 4,
      sku: 9197907543445677,
      title: 'Camisa Barcelona Third',
      description: '14/15 s/nº - Jogador',
      availableSizes: ['GG'],
      style: 'Verde e Azul',
      price: 349.9,
      installments: 12,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: false,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/camisa-barcelona-third-1920-sn-torcedor-nike-feminina/12/HZM-2680-012/HZM-2680-012_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 5,
      sku: 10547961582846888,
      title: 'Camisa Flamengo',
      description: '20/21 s/n° Torcedor Adidas Masculina',
      availableSizes: ['S', 'G', 'GG'],
      style: 'Preto e Vermelho',
      price: 249.99,
      installments: 9,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: false,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/camisa-flamengo-i-2021-sn-torcedor-adidas-masculina/02/NQQ-1178-002/NQQ-1178-002_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 6,
      sku: 6090484789343891,
      title: 'Camisa Manchester City',
      description: 'Home 19/20 s/n° - Torcedor Puma',
      availableSizes: ['M', 'G'],
      style: 'Azul e Roxo',
      price: 159.99,
      installments: 0,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/camisa-manchester-city-home-1920-sn-torcedor-puma/77/D14-8380-977/D14-8380-977_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 7,
      sku: 18532669286405342,
      title: 'Chuteira Infantil Umbro',
      description: 'Campo Burn Jr',
      availableSizes: ['36'],
      style: 'Verde e Preto',
      price: 89.9,
      installments: 4,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/chuteira-infantil-umbro-campo-burn-jr/60/D21-5349-260/D21-5349-260_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 8,
      sku: 5619496040738316,
      title: 'Calção Nike Strike Lgr Woven',
      description: '',
      availableSizes: ['GG'],
      style: 'Azul escuro',
      price: 119.9,
      installments: 4,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: false,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/calcao-nike-dri-fit-academy-masculino/26/HZM-0829-326/HZM-0829-326_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 9,
      sku: 11600983276356165,
      title: 'Calção Nike Dri-Fit',
      description: 'Academy Masculino',
      availableSizes: ['G', 'GG'],
      style: 'Azul Escuro',
      price: 64.99,
      installments: 3,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/calcao-nike-dri-fit-academy-masculino/42/HZM-0829-342/HZM-0829-342_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 10,
      sku: 27250082398145995,
      title: 'Jaqueta Palmeiras Savoia Trilobal Masculina',
      description: '',
      availableSizes: ['G', 'GG'],
      style: '',
      price: 249.9,
      installments: 9,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/jaqueta-palmeiras-savoia-trilobal-masculina/08/D65-2973-008/D65-2973-008_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 11,
      sku: 39876704341265606,
      title: 'Camisa Juventus Home',
      description: '19/20 S/N° Torcedor Adidas Masculina',
      availableSizes: ['S', 'G'],
      style: 'Preto',
      price: 99.9,
      installments: 3,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/camisa-juventus-home-1920-sn-torcedor-adidas-masculina/06/COL-4659-006/COL-4659-006_detalhe1.jpg',
        params: {
          ims: '544x',
          ts: '1588953188',
        },
      },
    },

    {
      id: 12,
      sku: 12064273040195392,
      title: 'Tênis Nike Revolution 5 Masculino',
      description: '',
      availableSizes: ['40', '43'],
      style: 'Preto e Branco',
      price: 229.9,
      installments: 9,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_detalhe1.jpg',
        params: {
          ims: '544x',
          ts: '1571078789',
        },
      },
    },

    {
      id: 13,
      sku: 51498472915966366,
      title: 'Tênis Nike Revolution 5 Feminino',
      description: '',
      availableSizes: ['37'],
      style: 'Preto',
      price: 249.9,
      installments: 6,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/04/HZM-1729-304/HZM-1729-304_detalhe1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 14,
      sku: 10686354557628303,
      title: 'Tênis Puma Flyer Runner',
      description: '',
      availableSizes: ['39', '40', '43'],
      style: 'Vermelho com detalhe em preto',
      price: 159.9,
      installments: 3,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner/26/D14-6469-026/D14-6469-026_detalhe1.jpg',
        params: {
          ims: '544x',
        },
      },
    },

    {
      id: 15,
      sku: 11033926921508487,
      title: 'Moletom DC Shoes Session Masculino',
      description: '',
      availableSizes: ['G', 'GG'],
      style: 'Preto',
      price: 299.9,
      installments: 8,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/moletom-dc-shoes-session-masculino/06/420-9872-006/420-9872-006_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },
    {
      id: 16,
      sku: 10412368723880253,
      title: 'Moletom Billabong Originals Secret Canguru Masculino',
      description: '',
      availableSizes: ['P', 'M', 'G'],
      style: 'Cinza',
      price: 199.9,
      installments: 5,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true,
      featuredMedia: {
        baseURI:
          'https://static.netshoes.com.br/produtos/moletom-billabong-originals-secret-canguru-masculino/10/D75-2332-010/D75-2332-010_zoom1.jpg',
        params: {
          ims: '544x',
        },
      },
    },
  ],
};
