//  seed for user testing
const { User } = require('../models');

const userData = [
  {
    user_id: 1,
    user_name: "Bill Bever"
  },
  {
    review_id: 2,
    review_note: "Tammy Termite"
  },
  {
    review_id: 3,
    review_note: "Freddy Fungus"
  }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;