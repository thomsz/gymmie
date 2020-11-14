const mongoose = require('mongoose');
const workoutSchema = require('../schemas/workoutSchema');

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
