const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({

    Select_LAB: {
        type: String,
        required: true
    },
    Item_id: {
        type: String,
        required: true
    },
    Main_Category: {
        type: String,
        required: true
    },
    Asset_Description: {
        type: String,
        required: true
    },
    Serial_Num: {
        type: String,
        required: true
    },
    Asset_Code: {
        type: String,
        required: true
    },
    Qty: {
        type: String,
        required: true
    },
    Make: String,
    Condition: String,
    Comments: {
        type: String,
        date: Date
    }
    
});

module.exports = mongoose.model("LabItem", Item);