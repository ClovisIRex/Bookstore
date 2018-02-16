const mongoose = require('../helpers/db')
const Schema = mongoose.Schema
 
/**
 * Book Mongoose database model
 */
const bookSchema = new Schema({
    title: String,
    description: String,
    isbn: Number,
    author: String,
    publicationDate: Number,
    genre: String,
    price: Number
})


module.exports = mongoose.model('Book', bookSchema)