module.exports = (app) => {
  app.get(
    '/listings/new',
    (req, res) => {
      res.send('hello world');
    }
  );
};
