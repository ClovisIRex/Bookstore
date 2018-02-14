const {ValidationError} = require('../errors/error')

const Joi = require('joi');

const schema = Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    isbn: Joi.number(),
    author: Joi.string(),
    publicationDate: Joi.date(),
    genre: Joi.string().valid('Science fiction', 'Satire', 'Drama', 'Action', 'Romance',
    'Mystery','Horror'),
    price: Joi.number()
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

