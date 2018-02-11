const { ValidationError, AlreadyExistsError } = require('./error')

module.exports = (error, req, res, next) => {
    let msg;

    switch(error.constructor) {
        case ValidationError:
            msg = 'Request failed- data not validated, enter valid data.';
            break;
        case AlreadyExistsError:
            msg = 'Request failed- data already exists.';
            break;
        default:
            msg = 'General Error';
            break;
    }
    
    res.json({'status':false, 'msg': msg})
    console.log(`[ERROR] ${error.message}`) 
}