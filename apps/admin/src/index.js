const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const route = require('./routes');
const app = express()
const port = 3000

app.use(morgan('combined'))

app.use(express.static('./src'))


app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './src/resources/views')

route(app);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))