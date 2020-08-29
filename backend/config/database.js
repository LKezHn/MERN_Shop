const mongoose = require('mongoose');

class Database{
    constructor(){
        this.connect();
    }

    connect(){
        mongoose.connect(`mongodb://${process.env.DB_ADDRESS}`, { useNewUrlParser : true, useUnifiedTopology: true})
            .then( () => console.log('Connected to MongoDB'))
            .catch( err => console.error(err)); 
    }
}

module.exports = new Database();