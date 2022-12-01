class ContactController{
    // [GET] /news
    index(req, res){
        res.render('table')
    }

    show(req, res){
        res.send('Table');
    }
}

module.exports = new ContactController;
