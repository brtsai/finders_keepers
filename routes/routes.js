module.exports = app => {
	app.namespace("/api", function() {
		require("./listingsRoutes")(app);
		require("./sessionRoutes")(app);
	});

	require("./authRoutes")(app);
};
