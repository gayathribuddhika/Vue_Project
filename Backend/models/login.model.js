const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 8
        
    },          

    user_type: {
        type: String,
        required: true
    }

}, 
    {collection: "Login"}
);

module.exports = mongoose.model("Login", loginSchema);