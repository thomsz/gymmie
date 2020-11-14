require('../database/connection');
const express = require('express');
const router = express.Router();

const Workout = require('../database/models/workoutModel');

router.get('/', async (req, res) => {
	// TODO: Pagination
	try {
		const workouts = await Workout.find();

		res.send(workouts);
	} catch (error) {
		res.status(501).send({
			errors: [
				{
					status: '501',
					title: 'Could not fetch workouts',
				},
			],
		});
	}
});

router.get('/:id', (req, res) => {
	// TODO: Get workout by id
});

module.exports = router;
