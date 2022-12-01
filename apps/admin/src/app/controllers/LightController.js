class CompairController{
    // [GET] /news
    index(req, res){
        res.render('light')
    }

    show(req, res){
        res.send('Light');
    }
}

module.exports = new CompairController;
