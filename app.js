const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const config = require('./config/server')
const errorController = require('./errors/errorController')
const bookController = require('./routes/book')


class App {

    constructor() {
        this.express = express()
        this.setupMiddleware()
        this.setupRoutes()
        this.setupErrorHandler()
        console.log('[INFO] Finished setting up web app')
    }

    setupMiddleware() {

        this.express.use(bodyParser.json())
        
        if (config.isTesting()) {
            this.express.use(morgan('dev'))
        } 
        
         else {
            this.express.use(morgan('common'))
        }
    }

    setupRoutes() {
        this.express.use('/api/book',bookController)
    }
    
    setupErrorHandler() {
        this.express.use(errorController)
    }
}

module.exports = new App().express
