const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
    Select_Lab: {
        type: String
    },
    
    Main_Category: {
        type: String
    },
    Asset_Description: {
        type: String
    },
    Asset_Code: {
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
}
    );

module.exports = mongoose.model("Item", Item);