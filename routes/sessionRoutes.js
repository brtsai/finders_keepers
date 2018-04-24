

module.exports = (app) => {

	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/current_user', (req, res) => {
		// res.send(req.session)
		res.send(req.user);
	});
};
