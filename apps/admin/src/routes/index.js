const staticRouter = require('./static');
const dashboardRouter = require('./dashboard');
const forgetPassRouter = require('./forgetpass');
const loginRouter = require('./login');
const registerRouter = require('./register');
const homeRouter = require('./home');
const lightRouter = require('./light');
const error401Router = require('./error401');
const error404Router = require('./error404');
const error500Router = require('./error500');
const chartRouter = require('./chart');
const tableRouter = require('./table');

function route(app) {

    app.use('/static', staticRouter);
    app.use('/light', lightRouter);
    app.use('/dashboard', dashboardRouter);
    app.use('/forgetpass', forgetPassRouter);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/home', homeRouter);
    app.use('/error401', error401Router);
    app.use('/error404', error404Router);
    app.use('/error500', error500Router);
    app.use('/chart', chartRouter);
    app.use('/table', tableRouter);
}

module.exports = route;
