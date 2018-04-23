const passport = require('passport') // importing original passport npm module



module.exports = (app) =>{

	app.get(
		'/auth/google', 
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res)=>{
		// res.send(req.session)
		res.send(req.user);
	});
}