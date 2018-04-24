module.exports = (app) => {
  
  
  app.namespace('/api', function () {
    require('./listingsRoutes')(app);  
  
  });

};
