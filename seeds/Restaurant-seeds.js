//  seed for retaurant testing
const { Restaurant } = require('../models');

const restaurantData = [
  {
    restaurant_id: 1,
    restaurant_name: "The Logg Barn"
  },
  {
    restaurant_id: 2,
    restaurant_name: "Logg Jam"
  },
  {
    restaurant_id: 3,
    restaurant_name: "Kenny's Loggn'"
  }
]
const seedRestaurant = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurant;