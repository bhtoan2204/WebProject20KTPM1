const express = require("express");

const router = express.Router();
const bookService = require('../../services/book.service');
const qs = require('qs');
const categoryService = require("../../services/category.service");
var Paginator = require("paginator");
const limit = 6;

router.get('/', async (req, res, next) => {
    try {
        const { sort: sortFilter } = req.query;
        const pageAsNum = req.query.page[1] ? Number(req.query.page[1]) : 1;
        const from = req.query.from[1] ? Number(req.query.from[1]): 0;
        const to = req.query.to[1] ? Number(req.query.to[1]): 1000000000;

        console.log(from + "->" + to)

        let pageNo = 1
        if (!Number.isNaN(pageAsNum) && pageAsNum > 0) {
            pageNo = pageAsNum;
        }

        let products = [];
        let pagination_info;
        if (sortFilter === '') {
            const totalBooks = await bookService.searchBook(req.query, from, to);
            const countBooks = totalBooks.length;
            const paginator = new Paginator(limit, 6);
            pagination_info = paginator.build(countBooks, pageNo);
            products = await bookService.searchBookByLimit(req.query, limit * (pageNo - 1), limit, from, to);
        }
        else {
            const totalBooks = await bookService.searchBookAndSorted(req.query, from, to);
            const countBooks = totalBooks.length;
            const paginator = new Paginator(limit, 6);
            pagination_info = paginator.build(countBooks, pageNo);
            products = await bookService.searchBookAndSortedByLimit(req.query, limit * (pageNo - 1), limit, from, to);
        }
        const categories = await categoryService.getAllCategories();
        if (pagination_info.total_pages < 2) {
            pagination_info = null;
        }
        //console.log(products);
        //console.log(products);
        let user = req.cookies["user"];
        res.render('customer/products', { user, pagination_info, products, categories });
    } catch (error) {
        console.log(error);
        res.render('admin/error401')
    }
});

router.get('/category/:id', async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const books = await bookService.getBooksByCategoryId(categoryId);
        const categories = await categoryService.getAllCategories();
        res.render('customer/products', { products: books, categories, searchUrl: 'customer/products/search', originalUrl: req.baseUrl, layout: 'customer-main' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/search', async (req, res, next) => {
    try {
        const query = JSON.parse(JSON.stringify(req.query));
        const result = await bookService.searchBook(query);
        res.render('customer/products', { products: result, searchUrl: 'customer/products/search' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})


module.exports = router;