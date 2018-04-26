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

          const busboy = new Busboy({ headers: req.headers });
          
          let uploadData = null;

          busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
            const filepath = path.join(os.tmpdir(), filename);
            uploadData = { filepath, type: mimetype };
            console.log(uploadData);
            // file.pipe(fs.createWriteStream(filepath));
          });
          
          busboy.on(
            'finish',
            () => {
              console.log('Busboy finished receiving data');
              cloudinary.uploader.upload(
                uploadData.filepath,
                (result) => { console.log(result); }
              );
              // const file = req.files.image;
              // console.log(file);
              // uploadToS3(file);
            }
          );
          busboy.end(req.rawBody);
          // req.pipe(busboy);
        }
      );
    }
  );
};