const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars')
const path = require('path');
const route = require('./routes');
<<<<<<< Updated upstream:apps/customer/src/index.js
=======
const { mainModule } = require('process');
const db = require('./config/db');
const { home } = require('./app/controllers/adminController');

// create the connection to database
// const connection = mysql.createConnection({
//   host: `localhost`,
//   user: `root`,
//   password: `root`,
//   database: `quanlynhansu`
// });

// connection.query(
//     'SELECT * FROM ``',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );



>>>>>>> Stashed changes:src/index.js
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password');

const app = express();  
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// http logger
app.use(morgan('combined'));

// template engine
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars');
<<<<<<< Updated upstream:apps/customer/src/index.js
app.set('views', path.join(__dirname, 'resource', 'views'));
=======
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', hbs.engine({
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  defaultLayout: 'customer-main',
}))
>>>>>>> Stashed changes:src/index.js

route(app);


app.listen(port, () => { });
