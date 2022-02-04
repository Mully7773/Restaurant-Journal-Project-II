//this is where we store our associations (JOIN)
const User = require('./User');
const Review = require('./Review');

// User.hasMany(Review, {
//    foreignKey: 'id',
// });

Review.belongsTo(User, {
    foreignKey: 'id'
});

module.exports = { User, Review };

