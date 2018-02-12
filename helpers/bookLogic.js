const Book = require('../models/Book');

/*
Business logic wrapper methods for books collection
*/
module.exports = {

    getBooks() {
        return new Promise((resolve, reject) => {
            Book.find((err, book) => {
                if (err) reject(err);
                else resolve(book);
            })
        })
    },

    getBookById(bookId) {
        return new Promise((resolve, reject) => {
            Book.findById(bookId, (err, book) => {
                if (err) reject(err);
                else resolve(book);
            })
        })
    },

    createBook() {

    },

    updateBook() {

    },

    deleteBook() {

    }
}