class ContactController{
    // [GET] /news
    index(req, res){
        res.render('customers/contact')
    }

    show(req, res){
        res.send('Contact');
    }
}

module.exports = new ContactController;
