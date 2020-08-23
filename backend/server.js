//* Importing libraries
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routers/principalRouter');
const db = require('./config/database');
const cors = require('cors');
const PORT = 3400;


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes)

app.listen(PORT, function(){
    console.log(`Server is up in port ${PORT}!`);
});





