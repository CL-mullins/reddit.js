const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = 3000
const Post = require


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/posts/new', (req, res) => {
  res.render('posts-new')
})

app.get('posts/create', (req, rest) => {
  res.render('/')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

