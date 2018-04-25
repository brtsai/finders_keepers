const express = require('express');
const namespace = require('express-namespace');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./models/listing');
require('./services/passport');

mongoose.connect(keys.mongoURI);
var db = mongoose.connection;

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.static( 'public/stylesheets'));

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//expose db to router
app.use(function (req, res, next) {
  req.db = db;
  next();
});

// routes
require('./routes/routes')(app);
// middleware


// this is the port that heroku will listen on, if none exists, 5000 will take over
const PORT = process.env.PORT || 5000;
app.listen(PORT);
