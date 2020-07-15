# [`Testtini Store`](https://store.cacojr.vercel.app/)

Exemplo de loja virtual feita com [Next.js](https://nextjs.org/) + [Typescript](https://www.typescriptlang.org/) + [Redux](https://redux.js.org/)

## Manual

### Instale as dependências

É necessário ter instalado o [`Node.js`](https://nodejs.org/en/) em sua máquina

Em seguida execute:

```bash
npm install
# ou
yarn
```

### Rodando o projeto

Para ver o projeto em localhost basta fazer o comando:

```bash
npm run dev
# ou
yarn dev
```

E então abra no browser:
`http://localhost:3000`

### Testes

Foi utilizado os pacotes [`Jest`](https://jestjs.io/) + [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro) para fazer os testes dos componentes.
Rode os testes com:

```bash
npm run test
# ou
yarn test
```

Caso queira ver a cobertura de testes

```bash
npm run coverage
# ou
yarn coverage
```

### Formatação

Para padronizar a formatação, o [`Prettier`](https://prettier.io/) já está configurado. Caso deseje mudar algum valor padrão, basta alterar no arquivo `.prettierrc`, em seguida rode:

```bash
npm run format
# ou
yarn format
```

## Notas

O projeto ainda tem alguns detalhes para finalizar por completo.

-   [ ] Simular uma compra
-   [x] Melhorar URI da página de produto
-   [ ] Agrupar itens iguais do carrinho
-   [ ] Atingir 100% da [`cobertura de testes`](#Testes)
-   [ ] Fazer lazy loading do componente `CartTab`
-   [ ] Escolha de variações do produto.
-   [ ] Inserir informações adicionais na página do produto.
-   [ ] Melhorar o PWA
-   [ ] Criação do [`Swagger`](https://swagger.io/) para documentar API.
