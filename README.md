# Bookstore

> A MEVN-stack CRUD app, frontend built mostly with vue-cli+webpack scaffolding and templates, backend manually.

API docs can be found here: https://documenter.getpostman.com/view/2006055/bookstore/RVfvDr76

## Build Setup

Setup MongoDB locally on the default port(no user) or set the environment variable        ```process.env.MONGODB_URI```

Important: For now the url defined in the vue components is the heroku production url. To fully test it locally change it in every component to your localhost url(I know this can be changed with some webpack config, but I prefer leave it as it is for now to avoid webpack-related issues).

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# Run mocha unit tests(server)
npm test

# Run the app
npm start
```




