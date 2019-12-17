const express = require('express');


const router = express.Router();
const users = [];

router.get('/',(req,res,next) => {
  res.render('root',{pageTitle: 'Add User', rootActive: true});
});

router.post('/',(req,res,next) => {
  users.push({username: req.body.username});
  res.redirect('/');
});

module.exports = {
  route: router,
  users: users
};