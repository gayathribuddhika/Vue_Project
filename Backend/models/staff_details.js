const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    
    username: {
        type: String,
        required:[true,"Username is required"]
    },
    password: {
        type: String,
        required:[true,"Password is required"]
    },
    email: {
        type: String,
        required:[true,"Email is required"]
    }
}, {collection: "Staff_Login"});

module.exports = mongoose.model("Staff", staffSchema);