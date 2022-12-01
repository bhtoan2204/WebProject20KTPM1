class CompairController{
    // [GET] /news
    index(req, res){
        res.render('home')
    }

    show(req, res){
        res.send('Home');
    }
}

module.exports = new CompairController;
