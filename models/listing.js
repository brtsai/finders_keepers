const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema(
	{
		userId: String,
		address: String,
		latitude: Number,
		longitude: Number,
		imageUrl: String,
		title: String,
		description: String,
		tags: [String]
	},
	{
		timestamps: { createdAt: "created_at" }
	}
);

const ListingModel = mongoose.model("listings", listingSchema);
