const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    
    Username: {
        type: String,
        //required:[true,"Username is required"]
    },
    Password: {
        type: String,
        //required:[true,"Username is required"]
    },
    Email: {
        type: String
    }
}, {collection: "Admin_Login"});

module.exports = mongoose.model("Admin", adminSchema);
/*const Admin = mongoose.model("Admin_Login", adminSchema);
module.exports = Admin;*/