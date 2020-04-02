const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    
    Username: {
        type: String
    },
    Password: {
        type: Password
    }
});

module.exports = mongoose.model("admin", adminSchema);