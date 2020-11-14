const mongoose = require('mongoose');
const url = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

mongoose.connect(`${url}/${dbName}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () =>
	console.log(`Connected successfuly to ${dbName} database`)
);
