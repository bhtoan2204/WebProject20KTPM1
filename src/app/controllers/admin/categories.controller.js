const express = require('express');
const router = express.Router();
const categoryService = require('../../../services/category.service');
const _ = require('lodash');

router.get('/', async (req, res)=>{
    try {
        if(req.cookies.admin != null) {
            const categories = await categoryService.getAllCategories();
            res.render('admin/table_categories', { layout: 'admin-main', categories, admin: req.cookies.admin });
        }
        else {
            res.redirect('/admin/login');
        }
        
    } catch (error) {
        console.log(error);
    }
})

router.post('/create', async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
      const result = await categoryService.createCategory(data.categories, data.url);
      return res.redirect('/admin/table_categories');
    } catch (error) {
      console.log(error);
      return res.render('admin/error500', { layout: 'admin-main' });
    }
  })

module.exports = router;