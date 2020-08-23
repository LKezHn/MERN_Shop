const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

/* ***************** Clients API ***************** */

// Obtener todos los clientes
router.get('/clients', async function(req, res){
    const clients = await Client.find();
    res.send(clients);
    console.log("GET method!")
});

// Obtener un solo Cliente por Username
router.get('/clients/:username', async function(req, res){
    const client = await Client.findOne( { username: req.params.username});
    if(client){
        res.send(client);
        console.log("GET method!");
    }else{
        res.status(400);
        res.send({ error: "Username not found"});
    }
})

// Agregar un cliente
router.post('/clients', async function(req, res){
    const client = new Client({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone
    });
    
    await client.save();
    res.send(client);
    console.log("Client was saved!");
})

// Update a client's information
router.patch('/clients/:username', async function(req, res){

    const client = await Client.findOne({ username : req.params.username })
    if(client){
        if(req.body.username){
            client.username = req.body.username;
        }
        if(req.body.password){
            client.password = req.body.password;
        }
        if(req.body.email){
            client.email = req.body.email;
        }
        if(req.body.name){
            client.name = req.body.name;
        }
        if(req.body.number){
            client.number = req.body.number;
        }
        await client.save();
        res.send(client);
        console.log("PATCH method!")
    }else{
        res.status(400);
        res.send({ error: "Username not found"});
    }
})

// Delete a client
router.delete('/clients/:username', async function(req, res){

    try{
        await Client.findOneAndDelete({ username: req.params.username});
        res.status(200).send({ message: 'Client deleted' });
        console.log('DELETE method!');
    }catch{
        res.status(400);
        res.send({ error: 'Username not found!'});
    }
})

module.exports = router;