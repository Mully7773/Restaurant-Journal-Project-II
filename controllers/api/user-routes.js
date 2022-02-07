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
        req.session.logged_in = true;
        req.session.user_id = userData.id;
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
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
  // console.log(userData);
  const user = userData.get({
    plain: true,
  });
  console.log(user);
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = user.id;
        req.session.current_user = true;
        
        res.status(200).json({ user: user, message: 'You are now logged in!' });
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
        res.status(204).json('User logged out').end();
        
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;