
const {ValidationError} = require('../errors/error')

const Joi = require('joi');

const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    isbn: Joi.number().required(),
    author: Joi.string().required(),
    publicationDate: Joi.date(),
    genre: Joi.string().valid('Science fiction', 'Satire', 'Drama', 'Action', 'Romance',
    'Mystery','Horror'),
    price: Joi.number().required()
});

const validate = (bookData) => {

    return new Promise((resolve, reject) => {
        Joi.validate(bookData, schema, (err) => {
            if (err) reject(err);
            else resolve(true);
        });
    });
    
}

module.exports = validate;

