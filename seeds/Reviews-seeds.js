//  seed for review testing
const { Review } = require('../models');

const reviewData = [
  {
    restaurant_name: "Kenny's",
    order: "1 Logg",
    rating: "a full star",
    experience: "This is the best logg I have ever had!",
    user_id: 1
  },
  {
    restaurant_name: "Timmy's",
    order: "2 Logg",
    rating: "2",
    experience: "The logg is so good here!",
    user_id: 2
  },
  {
    restaurant_name: "Lucky's",
    order: "3 Logg",
    rating: "3 star",
    experience: "all three stars",
    user_id: 3
  }
]
const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
