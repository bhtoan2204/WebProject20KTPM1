class ContactController{
    // [GET] /news
    index(req, res){
        res.render('chart')
    }

    show(req, res){
        res.send('Chart');
    }
}

module.exports = new ContactController;
