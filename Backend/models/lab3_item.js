const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    
    Select_LAB: {
        type: String
    },
    Item_id: {
        type: Number,
    },
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
},{collection: 'LAB03_CIS'}
    );

    /*Item.pre("save", function (next) {
        var doc = this;
        counter.findByIdAndUpdate(
        { "_id": "Item_id" },
        { "$inc": { "seq": 1 } }
        , function(error, counter) {
        if(error) return next(error);
        doc.Item_id= counter.seq.toString();
        next();
        });
        });*/

module.exports = mongoose.model("ItemLab3", Item);

