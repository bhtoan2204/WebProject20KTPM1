class ContactController{
    // [GET] /news
    index(req, res){
        res.render('error404')
    }

    show(req, res){
        res.send('Error404');
    }
}

module.exports = new ContactController;
