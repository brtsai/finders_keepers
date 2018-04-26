const mongoose = require('mongoose');
const Listing = mongoose.model('listings');

const parseTagsFromDescription = (description) => {
  return description.match(/#\w+/g);
};

const parseDescriptionFromDescription = (description) => {
  const words = description.split(' ');
  const nonTags = words.filter(word => !(word.includes('#')));
  return nonTags.join(' ');
};

const buildListingJSON = (listing) => {
  const json = Object.assign(
    {}, 
    listing, 
    { tags: parseTagsFromDescription(listing.description) },
    { description: parseDescriptionFromDescription(listing.description) }
  );
  
  return json;
};

module.exports = (app) => {
  app.get(
  	'/listings',
  	(req, res) => {
      const query = Listing.find({});
      query.exec(function(err, doc) {
        res.send(doc);
      });

  	}
  );

  app.get(
  	'/listings/:id',
  	(req, res) => {
  		console.log(req.params);
      const listing = Listing.findOne({ _id: req.params.id }, function (err, doc) {
        res.send(doc);
      });

  	}
  );

  app.post(
  	'/listings',
  	(req, res) => {
      console.log(req.body);

      const newListing = new Listing(buildListingJSON(req.body));
      console.log(buildListingJSON(req.body));
      newListing.save(err => console.log(err));
      res.send(newListing);
  	}
  );

  app.delete(
  	'listings/:id',
  	(req, res) => {
			const listing = Listing.findOneAndRemove({_id: req.params.id}, 
				function(err, doc) {
					res.send(doc);
				} );
  	}
  );

  app.patch(
  	'listings/:id',
  	(req, res) => {
			const listing = Listing.findOneAndUpdate({ _id: req.params.id }, 
				req.body, 
				{ new: true }, 
				function (err, doc) {
					console.log(err);
        	res.send(doc);
      });
  	}
  );
};
