const mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new Schema({
  lister: String,
  address: String,
  latitude: Number,
  longitude: Number,
  imageUrl: String,
  title: String,
  description: String,
  tags: [String]
});

mongoose.model('listings', listingSchema);
