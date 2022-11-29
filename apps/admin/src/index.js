const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.use(express.static('./src'))


app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './src/resources/views')


app.get('/', (req, res) => {
    res.render('home')
})
app.get('/dashboard', (req, res) => {
    res.render('home')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/password', (req, res) => {
    res.render('password')
})
app.get('/error401', (req, res) => {
    res.render('error401')
})
app.get('/error404', (req, res) => {
    res.render('error404')
})
app.get('/error500', (req, res) => {
    res.render('error500')
})
app.get('/light', (req, res) => {
    res.render('light')
})
app.get('/static', (req, res) => {
    res.render('static')
})
app.get('/chart', (req, res) => {
    res.render('chart')
})
app.get('/table', (req, res) => {
    res.render('table')
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))