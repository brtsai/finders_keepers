const mongoose = require('mongoose');

const parseTagsFromDescription = (description) => {
  return description.match(/#\w+/g);
}

const parseDescriptionFromDescription = (description) => {
  const words = description.split(' ');
  const nonTags = words.filter(word => !(word.includes('#')));
  return nonTags.join(' ');
}


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
  		console.log(req.db);
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
      console.log(req.body);
      const description = parseDescriptionFromDescription(req.body.listing.description);
      const tags = parseTagsFromDescription(req.body.listing.description);
      console.log(mongoose.model('listings'));
      res.send("created a listing");
  	}
  );

  app.delete(
  	'listings/:id',
  	(req, res) => {
      console.log(req.params);

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
