//  seed for user testing
const { User } = require('../models');

const userData = [
  {
    username: "Billy Beaver",
    email: "Billy@billy.com",
    password: "$2b$12$xH3AWfhCEITn1zQfv6wt3.ibqdGz1.ebGO7ZFppMArLOwNW0sKHc."
  },
  {
    username: "Tammy Termite",
    email: "Tammy@tammy.com",
    password: "$2b$12$mvJlTKrcd0eTmrFK0iGFpuJZF4N52R274zMuIGpmwZdKl8325xUjO"
  },
  {
    username: "Freddy Fungus",
    email: "Freddy@freddy.com",
    password: "$2b$12$TvzQq5M7QPYbkDcBGiNxIuR9TCBGcLLm9GYDeak7bsfpcDZK2Dxre"
  }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
