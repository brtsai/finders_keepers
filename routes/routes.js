<<<<<<< HEAD
module.exports = (app) => {
	
  app.namespace('/api', function () {
    require('./listingsRoutes')(app);
    require('./sessionRoutes')(app);
  });
=======
module.exports = app => {
	app.namespace("/api", function() {
		require("./listingsRoutes")(app);
		require("./sessionRoutes")(app);
		require("./imageUploadRoutes")(app);
	});
>>>>>>> e004210c39c187cc479a714aeb144b6a5afb678e

	require("./authRoutes")(app);
};
