const express = require('express');
const router = express.Router();
const authorService = require('../../../services/author.service');

router.get('/', async (req, res) => {
    try {
        if (req.cookies.admin != null) {
            const authors = await authorService.getAllAuthor();
            console.log(authors);
            res.render('admin/table_authors', { layout: 'admin-main', authors, admin: req.cookies.admin });
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
        const result = await authorService.createAuthor(data.author);
        return res.redirect('/admin/table_authors');
    } catch (error) {
        console.log(error);
        return res.render('admin/error500', { layout: 'admin-main' });
    }
})

router.post('/update', async (req, res) => {
    const data = req.body;
    try {
        const result = await authorService.updateAuthor(data.name, data.id);
        console.log(result);
        return res.redirect('/admin/table_authors');
    } catch (error) {
        console.log(error);
        return res.render('admin/error500', { layout: 'admin-main' });
    }
})

module.exports = router;