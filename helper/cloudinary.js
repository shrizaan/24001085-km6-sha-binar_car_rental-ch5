const cloudinary = require('../config/cloudinary');

exports.uploader = (file) =>
  new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.tempFilePath,
      { public_id: file.publicId },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        return resolve(result);
      },
    );
  });
