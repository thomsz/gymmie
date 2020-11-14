require('../database/connection');
const express = require('express');
const router = express.Router();

const Workout = require('../database/models/workoutModel');

// Get all workouts
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

// Get workout by id
router.get('/:id', async (req, res) => {
	try {
		const workout = await Workout.findById(req.params.id);

		res.send(workout);
	} catch (error) {
		res.status(501).send({
			errors: [
				{
					status: '501',
					title: 'Could not fetch workout',
				},
			],
		});
	}
});

module.exports = router;
