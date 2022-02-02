//  seed for review testing
const { Review } = require('../models');

const reviewData = [
  {
    review_id: 1,
    review_note: "This is the best logg I have ever had!"
  },
  {
    review_id: 2,
    review_note: "The logg is so good here!"
  },
  {
    review_id: 3,
    review_note: "Third logg is the charm. Fantastic!"
  }
]
const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
