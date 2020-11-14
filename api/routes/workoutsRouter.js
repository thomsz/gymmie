const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Got workouts');
});

module.exports = router;
