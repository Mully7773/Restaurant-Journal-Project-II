const router = require('express').Router();
const { raw } = require('express');
const { Review, User } = require('../models');
const auth = require('../utils/auth');


//homepage
router.get('/',  (req, res) => {
    res.render('index')
  });


  //review page
  router.get('/reviews',  (req, res) => {
    console.log(req.session.user_id);
    // User.findByPk();
    res.render('review', {user_id:req.session.user_id})
  });
  

  //archives
  //render all the reviews
  router.get('/archives',  async (req, res) => {
     try {
      const reviews = await Review.findAll({
      raw: true,
      order: [["id", "DESC"]],
    });
    const reviewData = {
      reviews
    }
    res.render("archives", reviewData);
    // res.json(reviewData)
    } catch (err) {
        console.log("There's an error:", err);
      }

  });


 
  router.get('/login',  (req, res) => {
    // if (!req.session.logged_in) {
    //   res.redirect('/')
    //   return;
    // }
    //else render the 'login' template
    res.render('login')
  });


  //User sign up
  router.get('/signup',  (req, res) => {
    res.render('signup')
  });
  module.exports = router;