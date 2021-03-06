const {ValidationError} = require('../errors/error')
/**
 * Vaidator util used to validate JSON's coming from the client.
 * Throws custom error if data is invalid
 */
const Joi = require('joi');

const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    isbn: Joi.number().required(),
    author: Joi.string().required(),
    publicationDate: Joi.number().required(),
    genre: Joi.string().valid('Science fiction', 'Satire', 'Drama', 'Action', 'Romance',
    'Mystery','Horror').required(),
    price: Joi.number().required()
});

const validate = (bookData) => {
    return new Promise((resolve, reject) => {
        Joi.validate(bookData, schema, (err) => {
            if (err) reject(new ValidationError());
            else resolve(bookData);
        });
    });
    
}

module.exports = validate;

