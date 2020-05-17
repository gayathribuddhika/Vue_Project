const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    List_of_Items: {
        type: String
    },
    In_Stock: {
        type: Number
    },
    On_Stock: {
        type: Number
    },
    Damaged: {
        type: Number
    }
}, { collection: "Stores" })

module.exports = mongoose.model("Store", stockSchema)