# Bem vindo ao projeto Spotifood

Esse projeto foi implementado seguindo as instruções do projeto [ifood frontend](https://github.com/ifood/ifood-frontend-test/blob/master/README.md).

* Ver aplicatico (É um dyno free do heroku pode demorar um pouco o load inicial): https://spotifood-rafael-bernardo.herokuapp.com/
* Ver documentação dos componentes: http://spotifood-docs.surge.sh/

Nesse projeto eu mostro quase todo o meu conhecimento em desenvolvimento web, desde Design e Ux até desenvolvimento e testes unitários.

## Business rules

* The page is composed of two components:
    * One list of featured playlists
    - [x] **Resposta: as listas de reprodução em destaque /pages/Index**
    * One filter component with API filter fields and one local search text input to filter the playlists by "name".
    - [x] **Resposta: os componentes /containers/Filters/FeaturedPlaylist.jsx e /containers/Filters/SearchBarFeaturedPlaylist.jsx**

* The API filter fields and their possible values/type should be mounted by consuming this API **[1. Playlists Filters]** (http://www.mocky.io/v2/5a25fade2e0000213aa90776)
- [x] **Resposta: Serviço implementado /service/Resources**

* The featured playlists to be displayed should be consumed from this API **[2. See the documentation from Spotify]** (https://developer.spotify.com/web-api/get-list-featured-playlists/)
- [x] **Resposta: Serviço implementado /service/Spotify**

* Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.
- [x] **Resposta: implementado utilizando Redux**

* Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.
- [x] **Resposta: implementado utilizando Web Worker para executar a atualização em outra thread**

* [Rodar o projeto](#rodar-o-projeto)
* [Estrutura do projeto](#estrutura-do-projeto)
* [Principais Dependências do projeto](#principais-dependências-do-projeto)
* [Componentes externos](#componentes-externos)
* [Why web worker?](#why-web-worker?)

#### Rodar o projeto

Para rodar o projeto você precisa realizar o clone do projeto do github:

```sh
git@github.com:rafamaxber/spotifood.git
```

**Para rodar o projeto**

```sh
yarn start
# or
npm start
```

**Para rodar os testes**

```sh
yarn test
# or
npm test
```

**Para rodar o docz**

```sh
yarn docz:dev
# or
npm run docz:dev
```


**Para rodar os testes com flow**

```sh
yarn flow
# or
npm run flow
```

#### Estrutura do projeto

```
├── doczrc.js
├── package.json
├── public
├── README.md
├── src
│   ├── App.js
│   ├── app.worker.js
│   ├── assets
│   ├── components
│   ├── constants
│   ├── containers
│   ├── index.js
│   ├── __mocks__
│   ├── pages
│   ├── services
│   ├── serviceWorker.js
│   ├── store
│   ├── __tests__
│   ├── utils
│   └── WebWorker.js
└── yarn.lock
```

#### Principais Dependências do projeto

Para criar o bootstrap do projeto eu usei a última versão do `create-react-app`, porque ele tem todas as ferramentas necessárias para iniciar um projeto React, e case seja necessário podemos ejetar o projeto e fazer qualquer tooling necessário com um projeto muito bem testado.

Para criar os componentes do projeto eu usei 'styled components' porque ele tem uma interface mais limpa e torna a experiência de criar um componente muito, muito simples mantendo a semântica do componente.

Para forçar a criação de chunks e carregar esses chunks sob demanda eu usei `react-loadable` que fornece um HOC para encapsular nosso componente e um componente de loading.

Para fazer requisições http eu usei `axios` porque utiliza promisses, tem interface simples e limpa.


#### Componentes externos

Para construir o filtro de timestamp eu usei `react-datetime-picker`

Para construir o filtro de offset usei `react-input-range`

Para construir o filtro de bandeira do país eu usei `flag image Api`


#### Why web worker?

Para criar uma experiência mais rápida e transparente, criei o atualizador de lista de reprodução em exibição com um trabalhador da web, porque um trabalhador da Web age sem mexer no segmento principal do javascript.
