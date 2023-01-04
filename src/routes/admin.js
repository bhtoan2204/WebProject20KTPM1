const express = require('express')

const router = express.Router();

const adminController = require('../app/controllers/adminController');
const listordersController = require('../app/controllers/listorders.controller');
const orderdetailsController = require('../app/controllers/orderdetails.controller');

router.use('/chart', adminController.chart);
router.use('/home', adminController.home);
router.use('/table', adminController.table);
router.use('/table_account', adminController.table_account)
router.use('/banned', adminController.banned)
router.post('/update', adminController.edit)
router.use('/update', adminController.update);
router.post('/login', adminController.checkLogin)
router.use('/login', adminController.login);
router.use('/logout', adminController.logout);
router.use('/listorders', listordersController);
router.use('/orderdetails', orderdetailsController);


module.exports = router;

