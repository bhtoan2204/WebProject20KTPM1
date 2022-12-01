const express = require('express');
const router = express.Router(); 

const contactController = require('../app/controllers/ChartController');

//newsController.index;

router.get('/chart' , contactController.show);

router.get('/', contactController.index);

module.exports = router;
