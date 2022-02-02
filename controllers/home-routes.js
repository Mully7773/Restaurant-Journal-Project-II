const router = require('express').Router();
const { Review, User } = require('../models')

router.get('/',  (req, res) => {
    res.render('index')
  });

  router.get('/reviews/:id',  (req, res) => {
    
    res.render('review')
  });

  router.get('/reviews/:id',  (req, res) => {
    
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








  // router.get('/reviews', async (req, res) => {
  //   try {
  //     // Get all projects and JOIN with user data
  //     const reviewData = await Review.findAll({
  //       include: [
  //         {
  //           model: Review,
  //           attributes: ['order', 'rating', 'experience' ],
  //         },
  //       ],
  //     });
  
  //     // Serialize data so the template can read it
  //     const projects = reviewData.map((project) => project.get({ plain: true }));
  
  //     // Pass serialized data and session flag into template
  //     res.render('homepage', { 
  //       projects, 
  //       logged_in: req.session.logged_in 
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  // router.get('/review/:id', async (req, res) => {
  //   try {
  //     const projectData = await Project.findByPk(req.params.id, {
  //       include: [
  //         {
  //           model: User,
  //           attributes: ['name'],
  //         },
  //       ],
  //     });
  
  //     const project = projectData.get({ plain: true });
  
  //     res.render('project', {
  //       ...project,
  //       logged_in: req.session.logged_in
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  // // Use withAuth middleware to prevent access to route
  // router.get('/profile', withAuth, async (req, res) => {
  //   try {
  //     // Find the logged in user based on the session ID
  //     const userData = await User.findByPk(req.session.user_id, {
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
  //     res.redirect('/profile');
  //     return;
  //   }
  
  //   res.render('login');
  // });
  




  module.exports = router;