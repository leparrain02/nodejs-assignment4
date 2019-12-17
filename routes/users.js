const express = require('express');
const rootUsers = require('./root');


const router = express.Router();


router.get('/users',(req,res,next) => {
  res.render('users',{users: rootUsers.users, pageTitle: 'List All Users',usersActive: true});
});

module.exports = router;