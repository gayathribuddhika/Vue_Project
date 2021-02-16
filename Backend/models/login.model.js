const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    
    username: {
        type: String,
    },

    password: {
        type: String,
    },

    user_type: {
        type: String,
    }

}, 
    {collection: "Login"}
);

module.exports = mongoose.model("Login", loginSchema);