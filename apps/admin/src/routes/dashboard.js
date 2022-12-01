const express = require('express');
const router = express.Router(); 

const conpareController = require('../app/controllers/DashboardController');



router.get('/dashboard' , conpareController.show);

router.get('/', conpareController.index);

module.exports = router;