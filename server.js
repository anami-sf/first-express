const express = require('express')
const app = express()
const path = require('path')

//require the todo "database"
const todoDb = require('./data/todo-db')

//create express app
app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

//configure app
    //specify view engine / templating engine (ex: ejs, handlebars, lodash)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Mount middleware (app.use)

//Mount route

app.get('/home', (req, res) => {
    res.render('home', {cohort: 'SEI-CC-4'})
})

app.get('/todos', (req, res) => {
    res.render('todos/index', {
        todos: todoDb.getAll()
    })
})

app.redirect('/', () => {
    res.redirect('/home')
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})