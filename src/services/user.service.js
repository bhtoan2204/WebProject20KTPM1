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
    checkIfExists: (email) =>{
        return new Promise(async (resolve, reject) => {
            try{
                const user = await User.findOne({
                    where:{
                        email:{
                            $eq:email
                        }
                    },
                    raw:true
                });
                return resolve(user);
            } catch(error){
                return reject(error)
            }
        })
    }
}

module.exports = userService;