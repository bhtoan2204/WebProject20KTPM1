const express = require("express");

const router = express.Router();
const bookService = require('../../services/book.service');
const orderService = require('../../services/order.service');
const qs = require('qs');
const categoryService = require("../../services/category.service");
var Paginator = require("paginator");
const orderItemListService = require("../../services/order_item_lists.service");


router.get('/', async (req, res, next) => {
    try {
        let user = req.cookies["user"];
        var orderList = []
        const pendingOrder = await orderService.getPendingOrder(user.id);
        for(var i =0; i<pendingOrder.length; i++){
            const obj = pendingOrder[i];
            obj["progress"] = 0;
            orderList.push(obj);
        }
        const shippingOrder = await orderService.getShippingOrder(user.id);
        for(var i =0; i<shippingOrder.length; i++){
            const obj = shippingOrder[i];
            obj["progress"] = 50;
            orderList.push(obj);
        }
        const doneOrder = await orderService.getDoneOrder(user.id);
        for(var i =0; i<doneOrder.length; i++){
            const obj = doneOrder[i];
            obj["progress"] = 100;
            orderList.push(obj);
        }
        
        res.render('customer/orderstatus', {orderList});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/:idorder', async (req, res) => {
    try {
        const idorder = req.params.idorder;
        const orderDetails = await orderItemListService.getById(idorder);
        console.log(orderDetails);
        res.render('customer/order_details', {orderDetails});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = router;