const express = require("express");

const router = express.Router();
const bookService = require('../../services/book.service');
const categoryService = require("../../services/category.service");
const authorService = require('../../services/author.service');
const publisherService = require('../../services/publisher.service');
const Language = require('../../models/enums/language.enum');
const cartService = require("../../services/cart.service");

router.get('/:id', async (req, res, next) => {
  let user = req.cookies["user"];
  const cartQuantity = user ? await cartService.getCartQuantity(user.id) : 0;
  try {
    const id = req.params.id;
    const book = await bookService.getBookById(id);
    const author = await authorService.getAuthorById(book.authorId);
    const publisher = await publisherService.getPublisherById(book.publisherId);
    Object.assign(book, { author: author.name, publisher: publisher.name, language: Language[book.language] });
    const categories = await categoryService.getAllCategories();
    const relatedBooks = await bookService.getBooksByCategoryId(book.categoryId);
    res.render('customer/product_details', {user,book, relatedBooks, categories, cartQuantity });
  } catch (error) {
    console.log(error);
    res.render('customer/error500', {cartQuantity})
  }
})

module.exports = router;