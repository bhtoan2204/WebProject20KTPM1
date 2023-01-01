const express = require('express');
const userService = require('../../services/user.service')
const app = express()

class adminController{
    chart(req, res){
        if(req.cookies.admin != null)
            res.render('admin/chart', {layout: 'admin-main', admin: req.cookies.admin});
        else
            res.redirect('/admin/login');
    }
    home(req, res){
        if(req.cookies.admin != null)
            res.render('admin/home', {layout: 'admin-main', admin: req.cookies.admin});
        else
            res.redirect('/admin/login');
        
    }
    update(req, res){
        if(req.cookies.admin != null)
            res.render('admin/update', {layout: 'admin-main', admin: req.cookies.admin});
        else
            res.redirect('/admin/login');    }
    table(req, res){
        if(req.cookies.admin != null)
            res.render('admin/table', {layout: 'admin-main', admin: req.cookies.admin});
        else
            res.redirect('/admin/login');
    }
    login(req, res){
        if(req.cookies.admin != null)
            res.send("You are Logged in")
        else 
            res.render('admin/login', {layout: 'admin-main', admin: req.cookies.admin});
    }
    logout(req, res){
        res.clearCookie('admin');
        res.redirect('/admin/login');
    }
    async checkLogin(req, res){
        const { email, password } = req.body;  
        const check = await userService.checkIfExists(email);
        if(check){            
            const admin = await userService.findUser(email, password)
            if(admin != null)
            {
                if(admin.isAdmin == false)
                {
                    res.cookie('admin', admin, {
                        onlyHttp: true,
                        maxAge: 6000000,
                    });

                    res.redirect('/admin/home')
                }                
                else
                {
                    res.render('admin/login', {message: 'You are not Admin!', layout: 'admin-main'});
                }
            }
            else
            {
                res.render('admin/login', {message: 'Wrong email or password!', layout: 'admin-main'});
            }
                
                
        }
        else {
            res.render('admin/login', {message: 'Wrong email or password!', layout: 'admin-main'})
        }    
    }
}

module.exports = new adminController;
