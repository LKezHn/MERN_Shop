const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const { addImages, updateImages } = require('../middlewares/companiesRefactorData');

/* ***************** Companies API ***************** */

router.get("/companies", async function (req, res) {
  const companies = await Company.find({}, { password: false });
  res.send(companies);
  console.log("GET method in companies");
});

router.get("/companies/:id", function (req, res) {
  Company.find({ _id: req.params.id }, { password: false }
    ).then(
      data => res.status(200).send(data)
    ).catch((err) => {
      res.status(400).send(err);
  })
});

router.post("/companies", addImages, function (req, res) {
  let company = new Company(({ name, address, email, banner, logo, password } = req.body));

  company.save().then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
});

router.patch("/companies/:id", updateImages, function (req, res) {
  Company.updateOne({ _id: req.params.id }, ({ name, address, email, logo, banner, password } = req.body))
    .then(data => res.send(data))
    .catch(err => res.send(err));
    console.log(req);
});

router.delete("/companies/:id", function (req, res) {
  Company.findOneAndDelete({ _id: req.params.id })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send({ err }));
});

module.exports = router;
