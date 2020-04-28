const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    
    Username: {
        type: String
    },
    Password: {
        type: String
    },
    Email: {
        type: String
    }
}, {collection: "Staff_Login"});

module.exports = mongoose.model("Staff", staffSchema);