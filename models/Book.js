const mongoose = require('../helpers/db')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: String,
    description: String,
    isbn: Number,
    author: String,
    publicationDate: Date,
    genre: String,
    price: Number
})

module.exports = mongoose.model('Book', bookSchema)