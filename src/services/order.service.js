const Order = require('../models/order.model');
const User = require('../models/user.model');

const orderService = {
    createNewOrder: (newAddress, subTotal, userPhone, userId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const d = new Date();
                const order = Order.create({
                    createtAt: d,
                    address: newAddress,
                    phone: userPhone,
                    totalPrice: subTotal,
                    note: null,
                    createdBy: userId,

                })
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    },
    getShippingOrder: (iduser) => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = await Order.findAll({
                    where: {
                        $and: [
                            { createdBy: iduser },
                            { status: 2 }
                        ]
                    },
                    raw: true
                });
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    },
    getPendingOrder: (iduser) => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = await Order.findAll({
                    where: {
                        $and: [
                            { createdBy: iduser },
                            { status: 1 }
                        ]
                    },
                    raw: true
                });
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    },
    getDoneOrder: (iduser) => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = await Order.findAll({
                    where: {
                        $and: [
                            { createdBy: iduser },
                            { status: 3 }
                        ]
                    },
                    raw: true
                });
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    },
    getById: (idorder) => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = await Order.findOne({
                    where: {
                        $and: [
                            { id: idorder }
                        ]
                    },
                    raw: true
                });
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    },
    getAllOrderAscByDate: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = await Order.findAll({
                    order: [
                        ['createAt', 'ASC'],
                    ],
                    raw: true
                });
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    },
    updateOrder: (idOrder, newStatus) => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = await Order.update(
                    {
                    status: newStatus,
                    },
                    {
                        where: { id: idOrder },
                    });
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    }
}

module.exports = orderService;