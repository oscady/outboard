import express from 'express';
import { resolve } from 'path';
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');
// initialize application
const app = express();

// handle CORS
const allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET. PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
};

app.use(allowCrossDomain);

// Database config
const db = config.get('mongoURI');

// Serve Static Assets
app.use(express.static('public'));

// connect to database
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('database connected...'))
	.catch((err) => console.log(err));

// set app to run on default port in production or 5000 in development
const port = process.env.PORT || 5000;

// express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// specify routes which can act on behalf of app.js
app.use('/api/images', require('./routes/api/images'));
app.use('/api/items', require('./routes/api/items'));
app.use('/api/release', require('./routes/api/release'));
app.use('/api/tracks', require('./routes/api/tracks'));

// --------- access to upload folders --------- serve static assets while in
// production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
app.listen(port, () => console.log(`Server started on port ${port}`));
