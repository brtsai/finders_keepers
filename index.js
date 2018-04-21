const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.send({ bye: "buddy"});
});

// this is the port that heroku will listen on, if none exists, 5000 will take over
const PORT = process.env.PORT || 5000;
app.listen(PORT);
