const express = require("express");

const router = express.Router();
const bookService = require('../../services/book.service');
const qs = require('qs');
const categoryService = require("../../services/category.service");
var Paginator = require("paginator");
const cartService = require("../../services/cart.service");
const limit = 6;

router.get('/', async (req, res, next) => {
    try {
        const { sort: sortFilter } = req.query;
        const pageAsNum = req.query.page ? Number(req.query.page) : 1;

        let pageNo = 1
        if (!Number.isNaN(pageAsNum) && pageAsNum > 0) {
            pageNo = pageAsNum;
        }

        let products = [];
        if (sortFilter === '') {
            const totalBooks = await bookService.searchBook(req.query);
            const countBooks = totalBooks.length;
            var paginator = new Paginator(limit, 6);
            var pagination_info = paginator.build(countBooks, pageNo);
            products = await bookService.searchBookByLimit(req.query, limit * (pageNo - 1), limit);
        }
        else {
            const totalBooks = await bookService.searchBookAndSorted(req.query);
            const countBooks = totalBooks.length;
            var paginator = new Paginator(limit, 6);
            var pagination_info = paginator.build(countBooks, pageNo);
            products = await bookService.searchBookAndSortedByLimit(req.query, limit * (pageNo - 1), limit);
        }
        const categories = await categoryService.getAllCategories();
        const { page, ...withoutSort } = req.query;
        let user = req.cookies["user"];
        res.render('customer/products', { user, pagination_info, products, categories, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}` });
    } catch (error) {
        console.log(error);
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
        console.log('query: ', query);
        const result = await bookService.searchBook(query);
        res.render('customer/products', { products: result, searchUrl: 'customer/products/search' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

router.post('/add-to-cart', async (req, res) => {
    try {
        let message = "";
        let user = req.cookies["user"];
        //console.log(user.id)
        const params = { book_id: req.body.id, quantity: "1" };
        const book_id_check = params.book_id;
        //console.log(JSON.stringify(params));
        const checkExistCart = await cartService.getCart(user.id);
        //console.log(checkExistCart);
        if (checkExistCart.length == 0) {
            const addedCart = await cartService.createNewCart(user.id, JSON.stringify(params));
            message = "success";
        }
        else {
            // check wheather book is existing in your cart or not
            var check = true;
            const listBook = JSON.parse(checkExistCart.products)
            // console.log(listBook);
            // console.log(book_id_check);
            for (var i = 0; i < listBook.length; i++) {
                if (parseInt(listBook[i].book_id) == book_id_check) {
                    check = false;
                    message = "Already in your cart";
                }
            }
            if (check == true) {
                const productsJson = JSON.parse(checkExistCart.products);
                productsJson.push(params);
                //console.log(productsJson);
                const updatedCart = await cartService.updateCart(user.id, JSON.stringify(productsJson))
                message = "success"
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})



module.exports = router;