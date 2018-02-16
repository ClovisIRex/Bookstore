const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path');

const config = require('./config/server')
const errorController = require('./errors/errorController')
const bookController = require('./routes/book')

/**
 * Wrapper class for all the server insatnce, separated into methods
 * for order and convenience.
 */
class App {

    constructor() {
        this.express = express()
        this.setupMiddleware()
        this.setupRoutes()
        this.setupErrorHandler()
        console.log('[INFO] Finished setting up web app')
    }

    setupMiddleware() {
        this.express.set('view engine', 'html');
        this.express.use(express.static(path.join(__dirname, 'dist')));
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({'extended':'false'}))


        // Determine console-based logging
        if (config.isTesting()) {
            this.express.use(morgan('dev'))
        } else {
            this.express.use(morgan('common'))
        }
    }

    setupRoutes() {
        this.express.use('/', express.static(path.join(__dirname, 'dist')));
        this.express.use('/api/book',bookController)
    }
    
    setupErrorHandler() {
        this.express.use(errorController)
    }
    
}

module.exports = new App().express
