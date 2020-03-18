const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
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

module.exports = mongoose.model("contact", contactSchema);