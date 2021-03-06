const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');


// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviewData = await Review.findAll()
    res.json(reviewData)
  } catch (err) {
      res.status(400).json(err);
    }
})



//Create new review
router.post('/', withAuth, async (req, res) => {
  console.log(req.body)
    try {
      const reviewData = await Review.create({
          restaurant_name: req.body.restaurantName,
          order: req.body.orderName,
          rating: req.body.yourRating,
          experience: req.body.yourExperience,
          user_id: 1
      });
  
        res.status(200).json(reviewData);
        //Send the user to the archives after they create a review
        // res.redirect('/archives') this still crashes the app
    } catch (err) {
      res.status(400).json(err);
    }
  });


  //Delete a review
  router.delete('/:id', async (req, res) => {
    console.log(req.params, req.session.user_id);
  
    try {
      const reviewData = await Review.destroy({
        where: {
          id: req.params.id,
          // user_id: req.session.user_id,
        },
      });
  
      if (!reviewData) {
        res.status(404).json({ message: 'No review found with this id!' });
        return;
      }
  
      res.status(200).json(reviewData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  //update a review via id
  // router.put(':/id', async (req, res) => {
  //   try {
  //     const updateReview = await Review.update(
  //       {
  //         restaurant_name: req.body.restaurant_name,
  //         order: req.body.order,
  //         rating: req.body.rating,
  //         experience: req.body.experience,
  //       },
  //       {
  //         where: {
  //           id: req.params.id,
  //         },
  //       }
  //     );
  //     res.status(200).json("Review successfully updated!");
    
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });
  

module.exports = router;