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

const fields = [
  { name: 'banner', maxCount: 1 },    
  { name: 'logo', maxCount: 1 },
  { name: 'profilePhoto', maxCount: 1}    
];

module.exports = { storage, fields } ;