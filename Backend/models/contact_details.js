const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
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

mongoose.model("contact", contactSchema);