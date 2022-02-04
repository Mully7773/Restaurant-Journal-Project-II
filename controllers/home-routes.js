const router = require('express').Router();
const { Review, User } = require('../models');
const auth = require('../utils/auth');


//homepage
router.get('/',  (req, res) => {
    res.render('index')
  });


  //review page
  router.get('/reviews',  (req, res) => {
    res.render('review')
  });
  

  //archives
  router.get('/archives',  (req, res) => {
    res.render('archives')
  });


  //User login
  //if the user is already logged in, redirect the request to the homepage
  router.get('/login',  (req, res) => {
    // if (req.session.logged_in) {
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







  // router.get('/archives', async (req, res) => {
  //   try {
  //     // Get all reviews and JOIN with user data
  //     const reviewData = await Review.findAll({
  //       include: [
  //         {
  //           model: Review,
  //           attributes: ['restaurant_name, 'order', 'rating', 'experience' ],
  //         },
  //       ],
  //     });
  
  //     // Serialize data so the template can read it
  //     const projects = reviewData.map((review) => review.get({ plain: true }));
  
  //     // Pass serialized data and session flag into template
        // if (req.session.logged_in) {
  //     res.render('archives', { 
  //       reviews, 
  //       logged_in: req.session.logged_in 
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
// }



  // router.get('/review/:id', async (req, res) => {
  //   try {
  //     const reviewData = await Review.findByPk(req.params.id, {
  //       include: [
  //         {
  //           model: Review,
  //           attributes: ['order', 'rating', 'experience' ],
  //         },
  //       ],
  //     });
  


  //     const project = reviewData.get({ plain: true });
  
  //     res.render('review', {
  //       ...project,
  //       logged_in: req.session.logged_in
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  // // Use withAuth middleware to prevent access to route
  // router.get('/review', withAuth, async (req, res) => {
  //   try {
  //     // Find the logged in user based on the session ID
  //     const reviewData = await User.findByPk(req.session.user_id, {
  //       attributes: { exclude: ['password'] },
  //       include: [{ model: Project }],
  //     });
  
  //     const user = userData.get({ plain: true });
  
  //     res.render('profile', {
  //       ...user,
  //       logged_in: true
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  // router.get('/login', (req, res) => {
  //   // If the user is already logged in, redirect the request to another route
  //   if (req.session.logged_in) {
  //     res.redirect('/');
  //     return;
  //   }
  
  //   res.render('login');
  // });
  




  module.exports = router;