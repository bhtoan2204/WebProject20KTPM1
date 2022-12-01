class ContactController{
    // [GET] /news
    index(req, res){
        res.render('error500')
    }

    show(req, res){
        res.send('Error500');
    }
}

module.exports = new ContactController;
