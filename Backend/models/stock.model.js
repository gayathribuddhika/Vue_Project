const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stock = new Schema({
    No: {
        type: Number,
    },
    List_of_Items: {
        type: String,
    },
    In_Stock: {
        type: Number
    },
    On_Order: {
        type: Number
    },
    Damaged: {
        type: Number
    }
}, { collection: "Stores" });

module.exports = mongoose.model("store", stock);