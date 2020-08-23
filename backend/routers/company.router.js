const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

/* ***************** Companies API ***************** */

router.get("/companies", async function(req, res){
    const companies = await Company.find();
    res.send(companies);
    console.log("GET method in companies");
});

router.get("/companies/:name", async function(req, res){
    const company = await Company.findOne({ name: req.params.name });
    if(company){
        res.send(company);
        console.log("GET method in companies");
    }else{
        res.status(400).send({ error: 'Name not found'});
    }
});

router.post("/companies", async function(req, res){
    const company = new Company({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    });

    await company.save();
    res.send(company);
    console.log("POSt method in companies");
});

router.patch("/companies/:name", async function(req, res){
    const company = await Company.findOne({ name: req.params.name });
    if(company){
        if(req.body.name){
            company.name = req.body.name;
        }
        if(req.body.password){
            company.password = req.body.password;
        }
        if(req.body.email){
            company.email = req.body.email;
        }
        if(req.body.address){
            company.address = req.body.address;
        }
        if(req.body.phone){
            company.phone = req.body.phone;
        }
        await company.save();
        res.send(company);
        console.log("PATCH method in companies");
    }else{
        res.status(400).send({ error: 'Name not found'})
    }
})

router.delete("/companies/:name", async function(req,res){
    try{
        await Company.findOneAndDelete({ name: req.params.name});
        res.status(200).send({ message: 'Company deleted'})
    }catch{
        res.status(200).send({ error: 'Name not found' });
    }
});

module.exports = router;
