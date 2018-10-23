# Welcome to Spotifood

That project was implemented based on [ifood frontend](https://github.com/ifood/ifood-frontend-test/blob/master/README.md) instructions.

* To see the App(It's a heroku free dyno, should be lazy in first load): https://spotifood-rafael-bernardo.herokuapp.com/
* To see the component documentation: http://spotifood-docs.surge.sh/

In that project I show almost all my knowledge in web development, since Design and Ux to unit testing.

## Business rules

* The page is composed of two components:
    * One list of featured playlists
    - [x] **Answer: The featured playlists /pages/Index**
    * One filter component with API filter fields and one local search text input to filter the playlists by "name".
    - [x] **Answer: The components /containers/Filters/FeaturedPlaylist.jsx and /containers/Filters/SearchBarFeaturedPlaylist.jsx**

* The API filter fields and their possible values/type should be mounted by consuming this API **[1. Playlists Filters]** (http://www.mocky.io/v2/5a25fade2e0000213aa90776)
- [x] **Answer: Implemented Service /service/Resources**

* The featured playlists to be displayed should be consumed from this API **[2. See the documentation from Spotify]** (https://developer.spotify.com/web-api/get-list-featured-playlists/)
- [x] **Answer: Implemented Service /service/Spotify**

* Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.
- [x] **Answer: Implemented with Redux**

* Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.
- [x] **Answer: Implemented with a Web Worker to execute in another thread**

* [Tutorial to run project](#tutorial-to-run-project)
* [Project structure](#project-structure)
* [Project main dependencies](#project-main-dependencies)
* [Project external components](#project-external-components)
* [Why web worker?](#why-web-worker?)

#### Tutorial to run project

To test the project we can make project clone:

```sh
git@github.com:rafamaxber/spotifood.git
```

**To run project**

```sh
yarn start
# or
npm start
```

**To run tests**

```sh
yarn test
# or
npm test
```

**To run docz documentation**

```sh
yarn docz:dev
# or
npm run docz:dev
```


**To run flow test**

```sh
yarn flow
# or
npm run flow
```

#### Project structure

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

#### Project main dependencies

To create a project bootstrap I used `create-react-app` latest version, because he has every necessary tool to initiate a react project and when necessary we can eject the project and make any tooling necessary with a project very well tested.

To create the project css components I used `styled components` because he has a cleaner interface and became the experience of create component very, very simple and keeping the semantic.

To forced a create a chunk and load that chunk on demand I used `react-loadable` which provides a HOC to encapsulate our component and a load component.

To make http requests I used `axios` because is builded with promises, have simple and clean interface.


#### Project external components

To build the timestamp filter I used `react-datetime-picker`

To build the offset filter I used `react-input-range`

To build the country flag filter I used `flag image Api`


#### Why web worker?

To build a fastest and transparent experience I create the featured playlist updater with a web worker, because a web worker act without mess the javascript main thread.
