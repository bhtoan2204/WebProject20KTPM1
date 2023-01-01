class customerController{
    // [GET] /news
    
    compair(req, res){
        res.render('customer/compair', {layout: 'customer-main', user: req.cookies.user})
    }
    components(req, res){
        res.render('customer/components', {layout: 'customer-main', user: req.cookies.user})
    }
    contact(req, res){
        res.render('customer/contact', {layout: 'customer-main', user: req.cookies.user})
    }
    faq(req, res){
        res.render('customer/faq', {layout: 'customer-main', user: req.cookies.user})
    }
    forgetpass(req, res){
        res.render('customer/forgetpass', {layout: 'customer-main', user: req.cookies.user})
    }
    home(req, res){
        res.render('customer/home', {layout: 'customer-main', user: req.cookies.user})
    }
    legal_notice(req, res){
        res.render('customer/legal_notice', {layout: 'customer-main', user: req.cookies.user})
    }
    login(req, res){
        res.render('customer/login', {layout: 'customer-main', user: req.cookies.user})
    }
    logout(req, res){
        res.clearCookie("user")
        res.redirect('/')
    }
    normal(req, res){
        res.render('customer/normal', {layout: 'customer-main', user: req.cookies.user})
    }
    product_details(req, res){
        res.render('customer/product_details', {layout: 'customer-main', user: req.cookies.user})
    }
    product_summary(req, res){
        res.render('customer/product_summary', {layout: 'customer-main', user: req.cookies.user})
    }
    register(req, res){
        res.render('customer/register', {layout: 'customer-main', user: req.cookies.user})
    }
    special_offer(req, res){
        res.render('customer/special_offer', {layout: 'customer-main', user: req.cookies.user})
    }
    tac(req, res){
        res.render('customer/tac', {layout: 'customer-main', user: req.cookies.user})
    }
}

module.exports = new customerController;
