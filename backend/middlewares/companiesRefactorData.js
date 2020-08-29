

var addImages = function(req, res, next){
  if(imagesExists(req)){
    assignUrls(req);
  }else if(imageExists(req)){
    assignOneUrl(req);
  }
  else{
    req.body.banner = '/static/profile.svg';
    req.body.logo = `/static/profile.svg`;
  }
  next();
}

var updateImages = function(req, res, next){
  if(imagesExists(req)){
    assignUrls(req); 
  }else if(imageExists(req)){
    updateUrl(req);
  }
  next();
}

function imagesExists(req){
  if(req.files.banner && req.files.logo) return true;
  return false;
}

function imageExists(req){
  if(req.files.banner || req.files.logo) return true;
  return false;
}

function assignUrls({body, files}){
  body.banner = `/uploads/img/${files.banner[0].filename}`
  body.logo = `/uploads/img/${files.logo[0].filename}`
}

function updateUrl({ body, files}){
  if(files.banner){
    body.banner = `/uploads/img/${files.banner[0].filename}`
  }
  if(files.logo){
    body.logo = `/uploads/img/${files.logo[0].filename}`
  }
}

function assignOneUrl({body, files}){
  if(files.banner){
    body.banner = `/uploads/img/${files.banner[0].filename}`
    body.logo = `/static/profile.svg}`;
  }
  else if(files.logo){
    body.logo = `/uploads/img/${files.logo[0].filename}`
    body.banner = `/static/profile.svg`;
  }
}

module.exports = { addImages, updateImages };