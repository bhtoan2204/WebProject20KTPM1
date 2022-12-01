class ContactController{
    // [GET] /news
    index(req, res){
        res.render('static')
    }

    show(req, res){
        res.send('Static');
    }
}

module.exports = new ContactController;
