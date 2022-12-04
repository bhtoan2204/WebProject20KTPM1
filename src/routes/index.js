const route1 = require('./admin');
const route2 = require('./customer')

function route(app) {
    app.use('/admin', route1);
    app.use('/customer', route2);

    app.get('/', (req, res) => {
        res.redirect('/customer/home');
    })
    app.get('/customer', (req, res) => {
        res.redirect('/customer/home');
    })
    app.get('/admin', (req, res) => {
        res.redirect('/admin/home');
    })
    app.get('/admin', (req, res) => {
        res.redirect('/admin/home');
    })
    app.get('/:random', (req, res) => {
        res.redirect('/admin/error404');
    })
}

module.exports = route;
