const service = require('./customerService');
const createErr = require('http-errors');
const qs = require('qs');

class customerController {
    // [GET] /news
    compair(req, res) {
        res.render('customer/compair', { layout: 'customer-main' })
    }
    components(req, res) {
        res.render('customer/components', { layout: 'customer-main' })
    }
    contact(req, res) {
        res.render('customer/contact', { layout: 'customer-main' })
    }
    faq(req, res) {
        res.render('customer/faq', { layout: 'customer-main' })
    }
    forgetpass(req, res) {
        res.render('customer/forgetpass', { layout: 'customer-main' })
    }
    home = async (req, res) => {
        const { name: nameFilter} = req.query;
        let products = [];
        products = await service.getNewest(nameFilter);
        res.render('customer/home', { products});
    }

    legal_notice(req, res) {
        res.render('customer/legal_notice', { layout: 'customer-main' })
    }
    login(req, res) {
        res.render('customer/login', { layout: 'customer-main' })
    }
    normal(req, res) {
        res.render('customer/normal', { layout: 'customer-main' })
    }
    product_details = async (req, res, next) => {
        const id_books = req.params['id_books'];
        const product = await service.get(id_books);
        if (!product) return next(createError(404));
        res.render('customer/product_details', {product})
    }
    product_summary(req, res) { 
        res.render('customer/product_summary', { layout: 'customer-main' })
    }
    register(req, res) {
        res.render('customer/register', { layout: 'customer-main' })
    }
    special_offer(req, res) {
        res.render('customer/special_offer', { layout: 'customer-main' })
    }
    tac(req, res) {
        res.render('customer/tac', { layout: 'customer-main' })
    }
    products = async (req, res) => {
        const { name: nameFilter,
                cat: catFilter,
                sort: sortFilter} = req.query;
        let products = [];
        if(nameFilter===''&&catFilter==='All'&&sortFilter==='' )
            products = await service.getAll();
        else
            products = await service.filter(nameFilter, catFilter, sortFilter);
        const { sort, ...withoutSort } = req.query;

        console.log(req.query);

        res.render('customer/products', { products, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}` });
    }

}

module.exports = new customerController;
