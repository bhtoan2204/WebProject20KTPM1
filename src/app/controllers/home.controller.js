const express = require("express");

const router = express.Router();
const config = require('../../config');
const bookService = require('../../services/book.service');

router.get('/', async (req, res, next) => {
    try {
        const books = await bookService.getAllBooks();
        console.log('books: ', books);
        res.render('customer/home', { books: books, layout: 'customer-main' });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;