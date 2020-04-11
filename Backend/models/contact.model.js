const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    
    Address: {
        type: String
    },
    Location: {
        type: String
    },
    Name: {
        type: String
    },
    Number: {
        type: String
    }
});

module.exports = mongoose.model("Contact", ContactSchema);