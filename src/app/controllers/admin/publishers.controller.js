const express = require('express');
const router = express.Router();
const publisherService = require('../../../services/publisher.service');

router.get('/', async (req, res)=>{
    try {
        if(req.cookies.admin != null) {
            const publishers = await publisherService.getAllPublisher();
            res.render('admin/table_publishers', { layout: 'admin-main', publishers, admin: req.cookies.admin });
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
    try {
        const result = await publisherService.createNewPublisher(data.publisher);
        return res.redirect('/admin/table_publishers');
    } catch (error) {
        console.log(error);
        return res.render('admin/error500', { layout: 'admin-main' });
    }
})

router.post('/update', async (req, res) => {
    const data = req.body;
    try {
        console.log(data);
        const result = await publisherService.UpdatePublisher(data.name, data.id);
        return res.redirect('/admin/table_publishers');
    } catch (error) {
        console.log(error);
        return res.render('admin/error500', { layout: 'admin-main' });
    }
})

module.exports = router;