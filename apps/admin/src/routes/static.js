const express = require('express');
const router = express.Router(); 

const contactController = require('../app/controllers/StaticController');

//newsController.index;

router.get('/static' , contactController.show);

router.get('/', contactController.index);

module.exports = router;
