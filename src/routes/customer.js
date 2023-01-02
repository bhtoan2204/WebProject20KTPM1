const express = require('express')

const router = express.Router();

const customerController = require('../app/controllers/customer/customerController');
const homeController = require('../app/controllers/customer/home.controller');
const productsController = require('../app/controllers/customer/products.controller');
const productDetailController = require('../app/controllers/customer/product_detail.controller');
const userController = require('../app/controllers/customer/user.controller');
const loginController = require('../app/controllers/customer/login.controller')
const registerController = require('../app/controllers/customer/register.controller');
const cartController = require('../app/controllers/customer/cart.controller');
const checkoutController = require('../app/controllers/customer/checkout.controller');
const orderstatusController = require('../app/controllers/customer/orderstatus.controller');
const orderdetailsController = require('../app/controllers/customer/order_details.controller');

router.use('/components', customerController.components);
router.use('/contact', customerController.contact);
router.use('/cart', cartController)
router.use('/faq', customerController.faq);
router.use('/forgetpass', customerController.forgetpass);
router.use('/home', homeController);
router.use('/legal_notice', customerController.legal_notice);
router.post('/login/find', loginController.checkLogin);
router.use('/login', customerController.login);
router.get('/logout', customerController.logout);
router.use('/register', registerController);
router.use('/normal', customerController.normal);
router.use('/product_details', productDetailController);
router.use('/product_summary', customerController.product_summary);
router.use('/special_offer', customerController.special_offer);
router.use('/tac', customerController.tac);
router.use('/products', productsController);
router.use('/user', userController);
router.use('/profile', customerController.profile);
router.use('/checkout', checkoutController);
router.use('/orderstatus', orderstatusController);
router.use('/order_details', orderdetailsController);

module.exports = router;
