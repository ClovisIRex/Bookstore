const { ValidationError, AlreadyExistsError, DoesntExistError } = require('./error')
const config = require('../config/server')

/**
 * Custom Error handler
 * @param {*} error 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = (error, req, res, next) => {
    // Will send 400 error code for app-logic unauthrized actions
    let msg;
    res.status(400);
    switch(error.constructor) {
        case ValidationError:
            msg = 'Request failed- data not validated, enter valid data.';
            break;
        case AlreadyExistsError:
            msg = 'Request failed- data already exists.';
            break;
        case DoesntExistError:
            msg = 'Request failed- data does not exist.';
            break;
        default:
        /**
         * Every other error is mostly server-related,
             not client-logic, so we send 500 to clarify
         */
            res.status(500);
            msg = 'General Error';
            break;
    }
    
    
    res.json({'Error': msg})

    // We wish to see the full stack trace in dev mode for debugging
    if (config.isTesting()) {
        console.log(`[ERROR] ${error.stack}`)
    }
     
}