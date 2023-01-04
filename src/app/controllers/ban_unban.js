const express = require('express');
const userService = require('../../services/user.service')
const app = express()

async function ban(id) {
    console.log(5555555);
    const user = await userService.findUserById(id);
    if(user.isBanned == true)
        user.isBanned = false;
    else    
        user.isBanned = true;
    userService.updateUserById(object.id, user);
}
