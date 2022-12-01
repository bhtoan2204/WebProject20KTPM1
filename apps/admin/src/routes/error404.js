const express = require('express');
const router = express.Router(); 

const contactController = require('../app/controllers/Error404Controller');

//newsController.index;

router.get('/error404' , contactController.show);

router.get('/', contactController.index);

module.exports = router;
