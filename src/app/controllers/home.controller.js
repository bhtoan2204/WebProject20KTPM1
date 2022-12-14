const express = require("express");

const router = express.Router();
const config = require('../../config');
const bookService = require('../../services/book.service');
const categoryService = require('../../services/category.service');

router.get('/', async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();
        const books = await bookService.getAllBooks();
        const searchUrl='/customer/products/search';
        let user = req.cookies["user"]
        res.render('customer/home', { books: books, categories: categories, searchUrl: searchUrl, layout: 'customer-main', user, });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;