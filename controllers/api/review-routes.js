const router = require('express').Router();
const { Review } = require('../../models');
const auth = require('../../utils/auth');

//Create new review
router.post('/', auth, async (req, res) => {
    try {
      const reviewData = await Review.create({
          restaurant_name: req.body.restaurant_name,
          order: req.body.order,
          rating: req.body.rating,
          experience: req.body.rating
      });
  
        res.status(200).json(reviewData);
     
    } catch (err) {
      res.status(400).json(err);
    }
  });


  //Delete a review
  router.delete('/:id', auth, async (req, res) => {
    try {
      const reviewData = await Review.destroy({
        where: {
          id: req.params.id,
        //   user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No review found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;