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
    findUser: (user, pass) => {
        return new Promise(async (resolve, reject) => {
            try {
                const users = await User.findOne({ where: { email: user, password: pass } });
                return resolve(users);
            } catch (error) {
                return reject(error);
            }
        })
    }
}

module.exports = userService;