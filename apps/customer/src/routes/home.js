const express = require('express');
const router = express.Router(); 

const homeController = require('../app/controllers/HomeController');

//newsController.index;

router.get('/home' , homeController.show);

router.get('/', homeController.index);

module.exports = router;