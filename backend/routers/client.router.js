const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

/* ***************** Clients API ***************** */

// Obtener todos los clientes
router.get('/clients', async function(req, res){
    const clients = await Client.find({},{
        _id : true, username : true, email : true, name : true
    });
    res.send(clients);
});

// Obtener un solo Cliente por Username
router.get('/clients/:id',function(req, res){
    Client.findOne( { _id: req.params.id},{
        _id : true, username : true, email : true, name : true
    })
    .then( data => res.status(200).send(data))
    .catch( err => res.status(400).send(err));
})

// Agregar un cliente
router.post("/clients",  function(req, res){
    let client = new Client( ({ name, address, email, logo, banner, password} = req.body ) );
    client.save().then( data => res.status(200).send(data) )
                  .catch( err => res.status(400).send(err));
    console.log("Post method in clients");
});

// Update a client's information
router.patch("/clients/:id", function(req, res){
    Client.updateOne({ _id: req.params.id },({ name, address, email, logo, banner, password} = req.body))
        .then( data => res.send(data))
        .catch( err => res.send(err));
});

// Delete a client
router.delete("/clients/:id", function(req,res){
    Client.findOneAndDelete({ _id: req.params.id})
        .then( data => res.status(200).send(data))
        .catch( err => res.status(400).send({ err}));
});


module.exports = router;