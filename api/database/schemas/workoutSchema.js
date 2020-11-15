const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
	name: String,
	description: String,
	startDate: Date,
	category: {
		type: String,
		enum: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'],
	},
	image: String,
});

module.exports = workoutSchema;
