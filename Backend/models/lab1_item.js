const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    
    Select_LAB: {
        type: String,
        required:true
    },
    Item_id: {
        type: String
    },
    Main_Category: {
        type: String,
        required:true
    },
    Asset_Description: {
        type: String,
        required:true
    },
    Serial_Num: {
        type: String,
        required:true
    },
    Asset_Code: {
        type: String,
        required:true
    },
    Qty: {
        type: String,
        //required:true
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
}, { collection: 'LAB01_CIS' }
);

module.exports = mongoose.model("ItemLab1", Item);