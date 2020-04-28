const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    Main_Category: {
        type: String
    },
    Asset_Description: {
        type: String
    },
    Serial_Num: {
        type: String
    },
    Asset_Code: {
        type: String
    },
    Qty: {
        type: String
    },
    Make: {
        type: String
    },
    Condition: {
        type: String
    },
    Comments: {
        type: String
    },
},{collection: 'LAB01_CIS'});

module.exports = mongoose.model("Item", ItemSchema);