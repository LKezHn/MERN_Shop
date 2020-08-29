const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: {
        type: String,   
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    }
},{
    timestamps : true
});

module.exports = mongoose.model("Client", schema);


