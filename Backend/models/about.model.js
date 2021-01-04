const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
     Name: {
        type: String
    }
}, { collection: 'Department_List' });

module.exports = mongoose.model('Department_List', ContactSchema);