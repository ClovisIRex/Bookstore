const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path');

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
        this.express.set('view engine', 'html');
        this.express.use('/static', express.static(path.join(__dirname, '/public/')));
        this.express.use(favicon('public/images/favicon.ico'))
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({'extended':'false'}))

        if (config.isTesting()) {
            this.express.use(morgan('dev'))
        } else {
            this.express.use(morgan('common'))
        }
    }

    setupRoutes() {
        this.express.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        })
        this.express.use('/api/book',bookController)
    }
    
    setupErrorHandler() {
        this.express.use(errorController)
    }
    
}

module.exports = new App().express
