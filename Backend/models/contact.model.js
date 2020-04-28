const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
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
}, { collection: 'Contact_Information' });

module.exports = mongoose.model('Contact', ContactSchema);