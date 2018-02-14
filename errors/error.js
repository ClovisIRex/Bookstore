'use strict'

// Object failed Joi validation
class ValidationError extends Error {
    constructor(msg = 'Invalid Request Was Sent', ...params) {
        //Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);
    
        //Custom debugging information
        this.msg = msg
        this.date = new Date();
      }
}

// Object already exists in the DB
class AlreadyExistsError extends Error {
    constructor(msg = 'Object already exists in DB', ...params) {
        //Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);
    
        //Custom debugging information
        this.msg = msg
        this.date = new Date();
      }
}

class DoesntExistError extends Error {
    constructor(msg = 'Object does not exis in DBt', ...params) {
        //Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);
    
        //Custom debugging information
        this.msg = msg
        this.date = new Date();
      }
}


module.exports = {
    ValidationError,
    AlreadyExistsError,
    DoesntExistError
}