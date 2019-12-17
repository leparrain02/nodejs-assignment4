const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootRoute = require('./routes/root');
const usersRoute = require('./routes/users');


const app = express();
app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(rootRoute.route);
app.use(usersRoute);

app.use('/', (req, res, next) => {
  res.status(404).render('error404',{pageTitle: 'Page Not Found'});
});

app.listen(3000);