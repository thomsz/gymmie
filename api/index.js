require('dotenv').config();
const express = require('express');
const app = express();

const router = require('./routes');

const port = process.env.PORT || 3001;

app.use('/api', router);

app.get('/', (req, res) => {
	res.send('Success');
});

app.listen(port, () => console.log(`Listening successfully on port ${port}`));
