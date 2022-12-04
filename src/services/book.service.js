const Book = require('../models/book.model');
const db = require('../config/database');

const bookService = {
    getAllBooks: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const books = Book.findAll({ raw: true });
                return resolve(books);
            } catch (error) {
                return reject(error);
            }
        })
    }
}

module.exports = bookService;