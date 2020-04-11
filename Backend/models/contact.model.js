const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
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

module.exports = mongoose.model('Contact', ContactSchema);