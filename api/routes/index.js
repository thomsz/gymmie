const express = require('express');
const router = express.Router();
const workoutsRouter = require('./workoutsRouter');

router.use('/workouts', workoutsRouter);

module.exports = router;
