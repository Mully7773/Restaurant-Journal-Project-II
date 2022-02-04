const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');


//Get all reviews
// router.get('/', async (req, res) => {
//   try {
//     const reviewData = await Review.findAll()
//   }

// })



//Create new review
router.post('/', withAuth, async (req, res) => {
    try {
      const reviewData = await Review.create({
          restaurant_name: req.body.restaurant_name,
          order: req.body.order,
          rating: req.body.rating,
          experience: req.body.experience,
          user_id: req.body.user_id
      });
  
        res.status(200).json(reviewData);
        //Send the user to the archives after they create a review
        // res.redirect('/api/archives')
    } catch (err) {
      res.status(400).json(err);
    }
  });


  //Delete a review
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const reviewData = await Review.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!reviewData) {
        res.status(404).json({ message: 'No review found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //update a review via id
  router.put(':/id', async (req, res) => {
    try {
      const updateReview = await Review.update(
        {
          restaurant_name: req.body.restaurant_name,
          order: req.body.order,
          rating: req.body.rating,
          experience: req.body.experience,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json("Review successfully updated!");
    
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

module.exports = router;