const express = require("express");

const router = express.Router();
const config = require('../../config');
const userService = require('../../services/user.service');
const bcrypt = require('bcryptjs')
const { uuid } = require('uuidv4');
const qs = require('qs');
const { render } = require("node-sass");

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

router.get("/", async (req, res) => {
    try{
        console.log(req.body);
        res.render('customer/register')
    }
    catch(error){
        console.log(error);
    }
});

router.post("/", async (req, res) => {
    try{
        let {name, email, pass1, pass2, dob, phone} = req.body;
        console.log(req.body);
        let err = [];
        const newUser = await userService.checkIfExists(email);
        console.log(newUser);
        if(!name||!email||!pass1||!pass2||!dob||!phone){
            err.push({message: "Please Enter all fields", check: "alert-block alert-error fade in"});
        }
        if(newUser){
            err.push({message: "Your email has already in used", check: "alert-block alert-error fade in"});
        }
        if(pass1.length<6){
            err.push({message: "Password should be at least 6 characters", check: "alert-block alert-error fade in"});
        }
        if(!validateEmail(email)){
            err.push({message: "Email is not valid", check: "alert-block alert-error fade in"});
        }
        if(pass1!=pass2){
            err.push({message: "Password doesn't match", check: "alert-block alert-error fade in"});
        }
        if(err.length>0){
            res.render("customer/register", {err});
        }
        else{
            //Validation has passed
            let hashPassword = await bcrypt.hash(pass2,10);
            let hashID = await uuid();
            console.log(hashID);
            console.log(hashPassword);
            
            err.push({message: "Successful", check: "alert-info fade in"})
            res.render("customer/register", {err});
        }
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;