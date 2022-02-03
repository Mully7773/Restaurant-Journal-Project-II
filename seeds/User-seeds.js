//  seed for user testing
const { User } = require('../models');

const userData = [
  {
    // Don't need user_id because it's auto-incrementing as a primary key
    user_name: "Billy Beaver",
    email: "Billy@billy.com",
    password: "billy123"
  },
  {
    user_name: "Tammy Termite",
    email: "Tammy@tammy.com",
    password: "tammy123"
  },
  {
    user_name: "Freddy Fungus",
    email: "Freddy@freddy.com",
    password: "freddy123"
  }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;