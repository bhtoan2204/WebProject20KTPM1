const express = require('express');
const router = express.Router(); 

const homeController = require('../app/controllers/LightController');

//newsController.index;

router.get('/light' , homeController.show);

router.get('/', homeController.index);

module.exports = router;