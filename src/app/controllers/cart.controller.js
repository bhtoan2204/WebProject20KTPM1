const express = require("express");

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.render('customer/cart', { layout: 'customer-main' });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
})

module.exports = router;