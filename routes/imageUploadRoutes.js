const AWS = require('aws-sdk');
const Busboy = require('busboy');

const BUCKET_NAME = 'finderskeepers';
const IAM_USER_KEY = 'AKIAIN3IOEICKU3BHPFQ';
const IAM_USER_SECRET = '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';

function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });

  s3bucket.createBucket(function() {
    const params = {
      Bucket: BUCKET_NAME,
      Key: file.name,
      Body: file.data,
    };

    s3bucket.upload(
      params,
      (err, data) => {
        if (err) {
          console.log('error in callback');
          console.log(err);
        } else {
          console.log('success');
          console.log(data);
        }
      });
  });
}

module.exports = (app) => {
  // Upload image
  app.post(
    '/upload',
    (req, res) => {
      const busboy = new Busboy({ headers: req.headers });

      console.log(req.headers);
      console.log(busboy);

      busboy.on(
        'finish',
        () => {
          console.log('Busboy finished receiving data');

          const file = req.files.image;
          console.log(file);
          uploadToS3(file);
        }
      );

      req.pipe(busboy);
    }
  );
};