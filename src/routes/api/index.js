const router = require('express').Router();
const thoughtRoutes = require();
const userRoutes = require();

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
