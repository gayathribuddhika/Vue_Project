const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({

    Select_LAB: {
        type: String,
        enum: ["CIS/LAB/01", "CIS/LAB/02", "CIS/LAB/03", "CIS/LAB/04", "CIS/LAB/05"],
        required: true
    },
    Item_id: {
        type: String,
        required: true
    },
    Main_Category: {
        type: String,
        enum: ["Accessories", "Communication Equipments", "Computer", "Furniture", "Office Equipments", "Other Equipments"],
        required: true
    },
    Asset_Description: {
        type: String,
        enum: [
            "Fans",
            "ACs",
            "Whiteboard",
            "Projector",
            "Projector Screen",
            "Sound System",
            "Printer",
            "Monitor",
            "System Unit",
            "UPS",
            "Mouse",
            "Keyboard",
            "Computer Table",
            "Computer Chair",
            "Normal Chair",
            "Telephone",
            "Laminationg Machine",
            "Photocopy Machine"
        ],
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
        type: Number,
        required: true
    },
    Make: {
        type: String
    },
    Condition: {
        type: String
    },
    Comments: {
        type: String,
        date: Date
    }    
}, { collection: 'LAB01_CIS' }

);

const Lab1 = mongoose.model("LAB01_CIS", ItemSchema);
const Lab2 = mongoose.model("LAB02_CIS", ItemSchema);
const Lab3 = mongoose.model("LAB03_CIS", ItemSchema);
const Lab4 = mongoose.model("LAB04_CIS", ItemSchema);
const Lab5 = mongoose.model("LAB05_CIS", ItemSchema);

module.exports = { Lab1, Lab2, Lab3, Lab4, Lab5 }

function validateItem(item){
    const schema = Joi.object({
        Select_LAB: Joi.string().required(),
        Item_id: Joi.string().required(),
        Main_Category: Joi.string().required(),
        Asset_Description: Joi.string().required(),
        Serial_Num: Joi.string().required(),
        Asset_Code: Joi.string().required(),
        Qty: Joi.number().required(),
        Make: Joi.string(),
        Condition: Joi.string(),
        Comments: Joi.string()
    });
    return schema.validate(item);
}

exports.Item = Item;
exports.validate = validateItem;
