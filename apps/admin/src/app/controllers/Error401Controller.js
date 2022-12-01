class ContactController{
    // [GET] /news
    index(req, res){
        res.render('error401')
    }

    show(req, res){
        res.send('Error401');
    }
}

module.exports = new ContactController;
