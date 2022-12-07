const express = require("express");

const router = express.Router();
const config = require('../../config');
const bookService = require('../../services/book.service');
const qs = require('qs');
const categoryService = require("../../services/category.service");

router.get('/', async (req, res, next) => {
    try {
        const { name: nameFilter, cat: catFilter, sort: sortFilter } = req.query;
        let products = [];
        if (!nameFilter&&!sortFilter&&catFilter==='All') {
            products = await bookService.getAllBooks();
        } else {
            products = await bookService.getAllBooks();
            console.log('all books: ', products);
        }
        const { sort, ...withoutSort } = req.query;
        res.render('customer/products', { products, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}` });
    } catch (error) {
        console.log(error);
    }
});

router.get('/category/:id', async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const books = await bookService.getBooksByCategoryId(categoryId);
        const categories = await categoryService.getAllCategories();
        res.render('customer/products', { products: books , categories, searchUrl: 'customer/products/search', originalUrl: req.baseUrl, layout: 'customer-main'});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/search', async (req, res, next) => {
    try {
        const query = JSON.parse(JSON.stringify(req.query));
        console.log('query: ', query);
        const result = await bookService.searchBook(query);
        res.render('customer/products', { products: result, searchUrl: 'customer/products/search' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = router;