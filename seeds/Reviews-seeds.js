//  seed for review testing
const { Review } = require('../models');

const reviewData = [
  {
    review_id: 1,
    review_note: "This is the best logg I have ever had!",
    order: "1 Logg",
    rating: "a full star",
    experience: "maximum star"
  },
  {
    review_id: 2,
    review_note: "The logg is so good here!",
    order: "2 Logg",
    rating: "2",
    experience: "best 2 stars"
  },
  {
    review_id: 3,
    review_note: "Third logg is the charm. Fantastic!",
    order: "3 Logg",
    rating: "3 star",
    experience: "all three stars"
  }
]
const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
