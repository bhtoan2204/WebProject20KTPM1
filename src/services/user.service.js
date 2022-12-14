const User = require('../models/user.model');
const db = require('../config/database');

const userService = {
    getAllUsers: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const users = await User.findAll({raw: true});
                return resolve(users);
            } catch (error) {
                return reject(error);
            }
        })
    },

    getUserById: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findOne({
                    where: {
                        id: id
                    },
                    raw: true
                });
                return resolve(user);
            } catch (error) {
                return reject(error);
            }
        })
    },

    updateUserById: (id, data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await User.update(data, {
                    where: {
                        id: id
                    }
                });
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    }
}

module.exports = userService;