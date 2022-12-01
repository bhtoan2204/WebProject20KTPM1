const express = require('express');
const router = express.Router(); 

const contactController = require('../app/controllers/Error500Controller');

//newsController.index;

router.get('/error500' , contactController.show);

router.get('/', contactController.index);

module.exports = router;
