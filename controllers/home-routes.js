const router = require('express').Router();

router.get('/',  (req, res) => {
    res.render('index')
  });

  router.get('/reviews',  (req, res) => {
    res.render('review')
  });

  router.get('/login',  (req, res) => {
    res.render('login')
  });

  router.get('/signup',  (req, res) => {
    res.render('signup')
  });

  router.get('/archives',  (req, res) => {
    res.render('archives')
  });




  module.exports = router;