const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = 3000

// MIDDLEWEAR

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))


// COOKIE PARSER
app.use(cookieParser());

// DATABASE
require('./data/reddit-db');


const checkAuth = require('./middleware/checkAuth');


require('./routes/posts')(app);
require('./routes/comments.js')(app);
require('./routes/auth.js')(app);
require('./routes/replies.js')(app);

app.use(checkAuth);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// EXPORTS APP FOR MOCHA TESTING
module.exports = app;
