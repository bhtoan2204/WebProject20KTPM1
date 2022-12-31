const express = require('express')

const router = express.Router();

const adminController = require('../app/controllers/adminController');
const customerController = require('../app/controllers/customerController')


router.use('/chart', adminController.chart);
router.use('/home', adminController.home);
router.use('/table', adminController.table);
router.use('/update', adminController.update);
router.use('/logout', customerController.logout);

module.exports = router;

