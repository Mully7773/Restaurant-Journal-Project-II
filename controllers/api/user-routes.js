const router = require('express').Router();
const { User } = require('../../models');


//For new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
      });
      
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  //For login
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        console.log("userData",userData)
        res
          .status(400)
          .json({ message: 'Wrong email or password. Please try again.' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        console.log("validPassword",validPassword)
        res
          .status(400)
          .json({ message: 'Wrong email or password. Please try again.' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.status(200).json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
  });
  
  //For logout
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;