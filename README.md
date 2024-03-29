<a href="https://kioshi.pictures"><img alt="kioshi" src="https://avatars3.githubusercontent.com/u/5122906?v=3&s=460" width="200"></a>

[ ![Codeship Status for cscawley/kioshi.pictures](https://codeship.com/projects/48db1d90-8db3-0133-1c12-36bb56d5ce1e/status?branch=kioshi-pictures)](https://codeship.com/projects/124056)
[![Dependency Status](https://david-dm.org/ampelos/kioshi.pictures.svg)](https://david-dm.org/ampelos/kioshi.pictures)

## Kioshi is powered by Este:

> The best dev stack and starter kit for React universal web apps.

> The [anti framework](http://tomasp.net/blog/2015/library-frameworks/), opting to concentrate on laser focused libraries and design patterns.

## Requirements
- [nvm](https://github.com/creationix/nvm) (recommended for development).
- [node.js](http://nodejs.org) (v5 is recommended).
- [gulp](http://gulpjs.com/) (`npm install -g gulp`)

If you are using different node versions on your machine, use `nvm` to manage them.

## Techniques

- Universal JavaScript dev stack for browser, server, mobile.
- [React](http://facebook.github.io/react/) with server side rendering on [expressjs](http://expressjs.com/) backend.
- [React Native](https://facebook.github.io/react-native/) for iOS and Android.
- [Redux](http://rackt.github.io/redux/) [Flux](https://facebook.github.io/flux/) with atomic [immutable.js](http://facebook.github.io/immutable-js) app state.
- Functional works: App state snapshots, time travel, hot reload everything.
- ECMAScript 2015+ with [babeljs.io](https://babeljs.io/). [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) and [Flowtype](http://flowtype.org/) syntax. Sourcemaps enabled.
- [react-router](https://github.com/rackt/react-router) for isomorphic routing.
- Universal / isomorphic data fetching example.
- Well tuned [webpack](http://webpack.github.io/) dev stack.
- [eslint](http://eslint.org/) ([Sublime Text 3 integration](https://github.com/steida/este/wiki/Recommended-Sublime-Text-3-settings#how-to-setup-the-eslint-for-st3))
- Localization with [formatjs.io](http://formatjs.io/).
- Simple yet powerfull sync/async validation based on [chriso/validator.js](https://github.com/chriso/validator.js)
- LESS, SASS, Stylus, or plain CSS with [autoprefixer](https://github.com/postcss/autoprefixer).
- Long Term Caching.
- [React Helmet](https://github.com/nfl/react-helmet) for handling Title and Meta changes on server and client
- And much more.

## Installing

```shell
git clone https://github.com/este/este.git este-app
cd este-app
npm install
```

## Start Development

- run `gulp`
- point your browser to [localhost:8000](http://localhost:8000)
- build something beautiful

## Dev Tasks

- `gulp` run web app in development mode
- `gulp -p` run web app in production mode
- `gulp test` test app

## Documentation

So you decided to give a chance to this web stack, but where is documentation? Code is documentation itself as it illustrates various patterns, but for start you should read something about [React.js](http://facebook.github.io/react/) and [Redux](http://redux.js.org/). Refresh you JavaScript knowledge about "new" JavaScript - [learn ES6](https://babeljs.io/docs/learn-es6/). This stack uses [immutable.js](http://facebook.github.io/immutable-js/) and class-less design for a [good reason](https://github.com/facebook/immutable-js/#the-case-for-immutability). [Express.js](http://expressjs.com/) is used on the [Node.js](http://nodejs.org/api/) based server. Application is [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9), so we can share code between browser, server, mobile, whatever easily. Congrats, you're Este.js expert level 1 now :-)

## Links

- [wiki: Recommended React Components](https://github.com/steida/este/wiki/Recommended-React-Components)
- [wiki: Recommended Sublime Text 3 Packages](https://github.com/steida/este/wiki/Recommended-Sublime-Text-3-settings)
- [twitter.com/estejs](https://twitter.com/estejs)
- [github.com/enaqx/awesome-react](https://github.com/enaqx/awesome-react)

## Windows

Use this if you are using JEST or another library, which has to be compiled.

- Install Python - Install version 2.7 of Python and add it to your path or/and create a PYTHONPATH environment variable.
- Install Visual Studio (Express Edition is fine) - We will need this for some of modules that are compiled when we are installing Este. [Download VS Express](https://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx), get one of the versions that has C++ - Express 2013 for Windows Desktop for example.
- Set Visual Studio Version Flags - We need to tell node-gyp (something that is used for compiling addons) what version of Visual Studio we want to compile with. You can do this either through an environment variable GYP_MSVS_VERSION. If you are using Express, you have to say GYP_MSVS_VERSION=2013e.

Thanks to [Ryanlanciaux](http://ryanlanciaux.github.io/blog/2014/08/02/using-jest-for-testing-react-components-on-windows/)

## Tips and Tricks

- To check current app state, just open browser console.
- With functional programming ([SOLID: the next step is Functional](http://blog.ploeh.dk/2014/03/10/solid-the-next-step-is-functional)), we don't need DI containers. We can use plain old [Pure DI](http://blog.ploeh.dk/2014/06/10/pure-di/). Check `injectDependencies` middleware in `configureStore`.
- Learn immutable.js, for example [Seq](https://github.com/facebook/immutable-js#lazy-seq). Handy even for native arrays and objects. For example, get object values: `Seq(RoomType).toSet().toJS()`
- Recommended editors are [sublimetext](http://www.sublimetext.com/) and [atom.io](https://atom.io) ([tips](https://github.com/steida/atom-io-settings)).

## FAQ

#### Why do I get EACCES error during `npm install`?
 This indicates that you do not have permission to write to the directories that npm uses to store packages and commands. One possible solution is to change the permission to npm's default directory.
 1. Find the path to npm's directory:  `npm config get prefix`  For many systems, this will be `/usr/local`
 2. Change the owner of npm's directory's to the effective name of the current user
 ```
 sudo chown -R `whoami` <directory>
 ```

#### Why does the CSS flicker when starting the app/refreshing it?
In dev mode, webpack loads all the style inline, which makes them hot reloadable. This behaviour disappears in production mode (`gulp -p`).

#### Does Hapi/SailJS/Restify/Rails work with Este? Do you have any example app for this framework?
Yes it does. Este is agnostic of what you use in your backend and is completely decoupled from the API. It uses an Express app for server-side rendering, but you can use anything for your API. The only benefit that an Express API has is that it can simply be `use()` by the main app, like any other middleware.

#### Is it possible use XXX library with Este?
Yes. Este makes little assumptions about your stack, and passing every bit of needed info through props. This is not a framework, nothing prevents you from picking the bits you're interested in.

#### Why Este is pure and why we have to pass data through props?
Pure means no side effects. Programming without side effects rocks. It allows us to hot reload everything and testing is much easier as well. When component renders only data passed through props, [shouldComponentUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate) can be implemented [only once](https://github.com/este/este/blob/master/src/native/components/Component.react.js#L11) per whole app. One can say it's verbose, but it isn't. It's explicit. And remember, we have to pass only data going to be rendered. Actions have access to app state.

## Training
- [learn-reactjs.com](http://www.learn-reactjs.com)
- [javascript-skoleni.cz](http://javascript-skoleni.cz)
- [DzejEs.cz](http://www.dzejes.cz) - czech articles about Este

## Notes

- Este.js dev stack works on OSX, Linux, and Windows.
- As a rule of thumb, Este.js supports all evergreen browsers plus last two pieces of IE.
- Support Este.js development via Bitcoin - [daniel.steigerwald.cz/#donate-estejs](http://daniel.steigerwald.cz/#donate-estejs)

## Credit

<img alt="Este.js" src="https://cloud.githubusercontent.com/assets/66249/6515278/de638916-c388-11e4-8754-184f5b11e770.jpeg" width="200">

made by Daniel Steigerwald, [twitter.com/steida](https://twitter.com/steida), @grabbou and the community
