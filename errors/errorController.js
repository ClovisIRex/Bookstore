const { ValidationError, AlreadyExistsError, DoesntExistError } = require('./error')
const config = require('../config/server')

module.exports = (error, req, res, next) => {
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
            res.status(500);
            msg = 'General Error';
            break;
    }
    
    
    res.json({'Error': msg})

    if (config.isTesting()) {
        console.log(`[ERROR] ${error.stack}`)
    }
     
}