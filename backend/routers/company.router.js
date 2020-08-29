const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

/* ***************** Companies API ***************** */

router.get("/companies", async function(req, res){
    const companies = await Company.find({},{
        _id : true,
        name: true,
        address: true,
        banner: true,
        logo: true,
        email: true
    });
    res.send(companies);
    console.log("GET method in companies");
});

router.get("/companies/:id", function(req, res){
    Company.find({ _id: req.params.id },{
        _id : true,
        name: true,
        address: true,
        banner: true,
        logo: true,
        email: true
    }).then( 
        data => res.status(200).send(data)
     ).catch( (err) =>{
        res.status(400).send(err);
    })
});

router.post("/companies",  function(req, res){
    let company = new Company( ({ name, address, email, logo, banner, password} = req.body ) );

    company.save().then( data => res.status(200).send(data) )
                  .catch( err => res.status(400).send(err));
    console.log("Post method in companies");
});

router.patch("/companies/:id", function(req, res){
    Company.updateOne({ _id: req.params.id },({ name, address, email, logo, banner, password} = req.body))
        .then( data => res.send(data))
        .catch( err => res.send(err));
});

router.delete("/companies/:id", function(req,res){
        Company.findOneAndDelete({ _id: req.params.id})
            .then( data => res.status(200).send(data))
            .catch( err => res.status(400).send({ err}));
});

module.exports = router;
