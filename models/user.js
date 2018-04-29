const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	displayName: String,
	profileImage: String,

});

mongoose.model("users", userSchema);

// This is a test
//test
