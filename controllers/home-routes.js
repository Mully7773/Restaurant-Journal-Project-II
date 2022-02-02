const router = require('express').Router();

router.get('/',  (req, res) => {
    res.render('index')
  });


  router.get('/reviews',  (req, res) => {
    res.render('review')
  });

  module.exports = router;