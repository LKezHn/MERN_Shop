const express = require('express');
const tower = express();

tower.use(require('./client.router'));
tower.use(require('./company.router')); 

module.exports = tower;
