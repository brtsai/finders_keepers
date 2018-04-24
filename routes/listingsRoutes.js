module.exports = (app) => {
  app.get(
    '/listings/new',
    (req, res) => {
      res.send('hello world');
    }
  );

  app.get(
  	'/listings',
  	(req, res) => {
  		res.send("this is all the listings");
  	}
  );

  app.get(
  	'/listings/:id',
  	(req, res) => {
  		res.send("this is one listing");
  	}
  );

  app.post(
  	'/listings',
  	(req, res) => {
  		console.log(req);
  		res.send("created a listing");
  	}
  );

  app.delete(
  	'listings/:id',
  	(req, res) => {
  		res.send("deleted the listing");
  	}
  );

  app.patch(
  	'listings/:id',
  	(req, res) => {
  		res.send("update the file");
  	}
  );


};
