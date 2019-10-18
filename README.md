# music_app

## Build Setup

``` bash
# install dependencies
cnpm install

# install sass
cnpm install node-sass --save-dev 
cnpm install sass-loader --save-dev
cnpm install style-loader --save-dev

## Module build failed: TypeError: this.getResolve is not a function
=> The reason it failed was because the version of 'sass-loader' was too high!
   1. package.json =>  "sass-loader": "^8.0.0"  --->  "sass-loader": "^7.3.1"
   2. cnpm install 
   3. npm run dev

# install vuex
cnpm install vuex -save

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
