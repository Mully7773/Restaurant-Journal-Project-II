const router = require('express').Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');

router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);
module.exports = router;