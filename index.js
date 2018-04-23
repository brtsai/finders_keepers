const express = require('express');
<<<<<<< HEAD
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// middleware

=======
const app = express();

app.get('/', (req,res) => {
	res.send({ bye: "buddy"});
});
>>>>>>> 57144ebb95a5ab66e0cb7ad03e4594600786d751

// this is the port that heroku will listen on, if none exists, 5000 will take over
const PORT = process.env.PORT || 5000;
app.listen(PORT);
