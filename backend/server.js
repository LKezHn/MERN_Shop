// Importing environment variables
require('dotenv').config();

// Importing modules
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routers/principalRouter');
const db = require('./config/database');
const multer = require('multer');
const cors = require('cors');
const { storage, fields } = require('./config/storage');

const app = express();

// MIddlewares
app.use(cors());
app.use(multer({ storage: storage}).fields( fields ))
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes)

app.listen(process.env.PORT, function(){
    console.log(`Server is up in port ${process.env.PORT}!`);
});





