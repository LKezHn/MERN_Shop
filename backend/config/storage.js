const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage(
  {
    destination: (req, file, cb) =>{
      cb(null, path.join(__dirname, '../public/uploads/img'));
    },
    filename: (req,file,cb)=> {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  }
);

module.exports = storage;