const express = require("express");
const router = express.Router();
const cartService = require('../../services/cart.service');
const bookService = require('../../services/book.service');


router.get('/', async (req, res, next) => {
  try {
    let user = req.cookies["user"];

    const yourCart = await cartService.getCart(user.id);
    listProductsJson = JSON.parse(yourCart.products);

    //console.log(listProductsJson);

    let products = [];

    var subTotal = 0;

    for (var i = 0; i < listProductsJson.length; i++){
      var obj = listProductsJson[i];
      for (var key in obj){
        if(key === "book_id"){
            product = await bookService.getBookById(obj[key]);
            products.push(product);
        }
        else{

            products[i].quantity = obj[key];
            products[i].total = parseInt(products[i].quantity)*parseInt(products[i].price);
            subTotal+=products[i].total;
        }
      }
    }

    console.log(products);

    res.render('customer/cart', { user, layout: 'customer-main', products , subTotal});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
})

module.exports = router;