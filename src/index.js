const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars')
const path = require('path');
const route = require('./routes');
const { mainModule } = require('process');
const config = require('./config');
const db = require('./config/database');
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password');
// async function connectToPostgres() {
//     const sequelize = new Sequelize(config.db.options);
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//         return sequelize;
//       } catch (error) {
    //         console.error('Unable to connect to the database:', error);
    //       }
    // }
// database
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(error => console.log(error));

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// http logger
app.use(morgan('combined'));

// template engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', hbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'customer-main',
}))


route(app);

app.listen(port, () => {})