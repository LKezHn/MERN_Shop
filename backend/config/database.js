const mongoose = require('mongoose');

class Database{
    constructor(){
        this.port = 27017;
        this.host = 'localhost';
        this.database = 'shop';
        this.connect();
    }

    connect(){
        mongoose.connect(`mongodb://${this.host}:${this.port}/${this.database}`,
        { useNewUrlParser : true, useUnifiedTopology: true}
        ).then( () => console.log('Connected to MongoDB'))
        .catch( err => console.error(err)) 
    }
}

module.exports = new Database();