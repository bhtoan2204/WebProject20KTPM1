const express = require('express');
const router = express.Router(); 

const contactController = require('../app/controllers/Error401Controller');

//newsController.index;

router.get('/error401' , contactController.show);

router.get('/', contactController.index);

module.exports = router;
