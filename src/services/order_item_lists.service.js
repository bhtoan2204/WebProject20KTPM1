const OrderItemList = require('../models/order_item_lists.model');

const orderItemListService = {
    createNewOne: (id, quan, bookid) => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = OrderItemList.create({
                    orderId: id,
                    quantity: quan,
                    bookId: bookid
                })
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    },
    getById: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const order = OrderItemList.findAll({
                    where: {
                        orderId: {
                            $eq: id
                        }
                    },
                    raw: true
                })
                resolve(order);
            }
            catch (err) {
                return reject(err);
            }
        })
    }
}

module.exports = orderItemListService;