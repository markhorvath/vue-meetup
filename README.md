# vue-meetup

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#NOTES

### Use material icons, fa-icons and mdi-icons werent working

### v-application drawer before v-toolbar was pushing the toolbar down due to the drawer's height of 100%, 100px padding, and/or position.  I added a style=position: fixed to the toolbar as a temp fix, but also may want to try putting the drawer after the toolbar as that seemed to work.  This may cause issues in future