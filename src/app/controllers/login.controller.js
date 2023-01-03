const express = require("express");
const userService = require('../../services/user.service');

// router.get('/', async (req, res) => {
//     try {
//         const categories = await categoryService.getAllCategories();
//         res.render('customer/login', { categories });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// });

// router.post('/find', async (req, res) => {
//     try {
//         const categories = await categoryService.getAllCategories();
//         const { email, password } = req.body;
//         const user = await userService.findUser(email, password);
//         if (user != null) {
//             res.cookie('user', user);
//             res.redirect('/');
//         }
//         else
//             res.render('customer/login', { categories, message: 'Wrong email or password!' })
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// });

class loginController{
    // [POST] /login/find
    async checkLogin(req, res){
        const { email, password } = req.body;  
        const user = await userService.findUser(email, password);
        if(user!=null)
        {
            res.cookie('user', user);
            res.redirect('/');
        }                
        else{
            res.render('customer/login', {message: 'Wrong email or password!'})
        }
    }
}

module.exports = new loginController;

//module.exports = router;
