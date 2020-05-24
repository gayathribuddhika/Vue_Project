const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
}, {collection: "Staff_Login"});

module.exports = mongoose.model("Staff", staffSchema);