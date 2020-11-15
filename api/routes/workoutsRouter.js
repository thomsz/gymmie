require('../database/connection');
const express = require('express');
const router = express.Router();

const Workout = require('../database/models/workoutModel');

// Get all workouts
// /?page=1&limit=20&month=4&categories=c5
router.get('/', async (req, res) => {
	let limit = 20;
	let skip = 0;

	// Limit {limit} query option to 50
	if (req.query.limit > 0 && req.query.limit < 50) {
		limit = +req.query.limit;
	}

	if (req.query.page > 0) {
		skip = (req.query.page - 1) * limit;
	}

	const month = +req.query.month;
	let monthFilter = {};
	if (month && month >= 1 && month <= 12) {
		monthFilter = { startDate: month };
	}

	let categories = req.query.category;
	let categoryFilter = {};

	if (categories) {
		categories = categories.split(',');
		categoryFilter = { category: { $in: categories } };
	}

	try {
		const workouts = await Workout.aggregate([
			{
				$facet: {
					totalCount: [{ $count: 'data' }],
					dataCount: [
						{ $match: categoryFilter },
						{
							$project: {
								startDate: { $month: '$startDate' },
								category: true,
							},
						},
						{ $match: monthFilter },
						{ $count: 'data' },
					],
					currentPageCount: [
						{ $match: categoryFilter },
						{
							$project: {
								startDate: { $month: '$startDate' },
								category: true,
							},
						},
						{ $match: monthFilter },
						{ $skip: skip },
						{ $limit: limit },
						{ $count: 'data' },
					],
					data: [
						{
							$set: {
								startDate: { $month: '$startDate' },
							},
						},
						{ $match: categoryFilter },
						{ $match: monthFilter },
						{ $sort: { _id: -1 } },
						{ $skip: skip },
						{ $limit: limit },
					],
				},
			},
		]);

		if (workouts[0].data.length > 0) {
			res.send({
				count: {
					onPage: workouts[0].currentPageCount[0].data,
					data: workouts[0].dataCount[0].data,
					total: workouts[0].totalCount[0].data,
				},
				data: workouts[0].data,
			});
		} else {
			res.status(404).send({
				errors: [
					{
						status: '404',
						title: 'Could not find data',
					},
				],
			});
		}
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
