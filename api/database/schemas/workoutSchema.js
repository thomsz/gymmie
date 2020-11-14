const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
	name: String,
	description: String,
	startDate: Date,
	category: {
		type: String,
		enum: [
			'Lose Fat',
			'Get Toned',
			'Gain Strength',
			'Increase Flexibility',
			'Beginner',
			'Intermediate',
			'Advanced',
		],
	},
	image: String,
});

module.exports = workoutSchema;
