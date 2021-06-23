const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = 3000
require('./controllers/posts')(app);


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set db
require('./data/reddit-db');

// Middlewear above

const Post = require('./models/post');

//////////////////////////////////
//         Routes               //
//////////////////////////////////

app.get('/', (req, res) => {
  Post.find({}).lean()
    .then((posts) => res.render('posts-index', { posts }))
    .catch((err) => {
      console.log(err.message);
    })
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


