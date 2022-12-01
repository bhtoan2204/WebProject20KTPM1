const express = require('express');
const router = express.Router(); 

const contactController = require('../app/controllers/TableController');

//newsController.index;

router.get('/table' , contactController.show);

router.get('/', contactController.index);

module.exports = router;
