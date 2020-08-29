const mongoose = require('mongoose');

const schema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    banner: {
        type: String,
        required: false
    },
    logo: {
        type: String,
        required: false
    }
},{
    timestamps : true
});

module.exports = mongoose.model('Company', schema);