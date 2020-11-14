require('../database/connection');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	// TODO: Get all workouts (paginated)
	res.send('Got workouts');
});

router.get('/:id', (req, res) => {
	// TODO: Get workout by id
});

module.exports = router;
