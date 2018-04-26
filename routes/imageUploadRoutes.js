<<<<<<< HEAD
const AWS = require('aws-sdk');
const Busboy = require('busboy');
const cors = require('cors')({origin: true});
const os = require('os');
const path = require('path');
const cloudinary = require('cloudinary');
const keys = require('../config/keys');


module.exports = (app) => {
  // Upload image
  console.log("Connected!");
  
    app.post(
      '/upload',
      (req, res) => {
        console.log("Really connected!");
        
        cors(req, res, () => {
          console.log("Really really connected!");
=======
const AWS = require("aws-sdk");
const Busboy = require("busboy");
const cors = require("cors")({ origin: true });
const os = require("os");
const path = require("path");
const cloudinary = require("cloudinary");
const keys = require("../config/keys");
// cloudinary.config(keys.cloudinaryKey);

// const BUCKET_NAME = 'finderskeepers';
// const IAM_USER_KEY = '';
// const IAM_USER_SECRET = '';

// function uploadToS3(file) {
//   let s3bucket = new AWS.S3({
//     accessKeyId: IAM_USER_KEY,
//     secretAccessKey: IAM_USER_SECRET,
//     Bucket: BUCKET_NAME,
//   });

//   s3bucket.createBucket(function() {
//     const params = {
//       Bucket: BUCKET_NAME,
//       Key: file.name,
//       Body: file.data,
//     };

//     s3bucket.upload(
//       params,
//       (err, data) => {
//         if (err) {
//           console.log('error in callback');
//           console.log(err);
//         } else {
//           console.log('success');
//           console.log(data);
//         }
//       });
//   });
// }

module.exports = app => {
	// Upload image
	console.log("Connected!");

	app.post("/upload", (req, res) => {
		console.log("Really connected!");

		cors(req, res, () => {
			console.log("Really really connected!");

			const busboy = new Busboy({ headers: req.headers });

			let uploadData = null;
>>>>>>> e004210c39c187cc479a714aeb144b6a5afb678e

			busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
				const filepath = path.join(os.tmpdir(), filename);
				uploadData = { filepath, type: mimetype };
				console.log(uploadData);
				// file.pipe(fs.createWriteStream(filepath));
			});

			busboy.on("finish", () => {
				console.log("Busboy finished receiving data");
				cloudinary.uploader.upload(uploadData.filepath, result => {
					console.log(result);
				});
				// const file = req.files.image;
				// console.log(file);
				// uploadToS3(file);
			});
			busboy.end(req.rawBody);
			// req.pipe(busboy);
		});
	});
};
