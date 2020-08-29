
var addProfilePhoto = function(req, res, next){
  if(photoExists(req)){
    req.body.profilePhoto = `/uploads/img/${req.files.profilePhoto[0].filename}`;
  }else{
    req.body.profilePhoto = `/static/profile.svg`; 
  }
  next();
}

var updateProfilePhoto = function(req, res, next){
  if(photoExists(req)){
    req.body.profilePhoto = `/uploads/img/${req.files.profilePhoto[0].filename}`;
  }
}

function photoExists(req){
  if(req.files.profilePhoto) return true;
  return false;
}

module.exports = { addProfilePhoto, updateProfilePhoto };