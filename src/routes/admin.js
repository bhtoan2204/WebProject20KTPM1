const express = require('express')

const router = express.Router();

const adminController = require('../app/controllers/adminController');


router.use('/chart', adminController.chart);
router.use('/home', adminController.home);
router.use('/table', adminController.table);
router.use('/update', adminController.update);
router.post('/login/find', adminController.checkLogin)
router.use('/login', adminController.login);
router.use('/logout', adminController.logout);

module.exports = router;

