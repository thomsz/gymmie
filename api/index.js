const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.send('Success');
});

app.listen(port, () => console.log(`Listening successfully on port ${port}`));
