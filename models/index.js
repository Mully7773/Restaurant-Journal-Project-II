//this is where we store our associations (JOIN)
const User = require('./User');
// const Restaurant = require('./Restaurant');
const Review = require('./Review');

User.hasMany(Review, {
   foreignKey: 'id',
   onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'id'
});

module.exports = { User, Review };

