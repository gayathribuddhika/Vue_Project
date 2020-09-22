const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    
    username: {
        type: String,
        //required:[true,"Username is required"]
    },
    password: {
        type: String,
        //required:[true,"Username is required"]
    },
    email: {
        type: String
    }
}, 
    {collection: "Admin_Login"}
);

module.exports = mongoose.model("Admin", adminSchema);
