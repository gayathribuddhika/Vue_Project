"use strict"

const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required:"Please Enter"
    },
    Main_Category: {
        type: String,
        required:"Please Enter"
    },
    Asset_Description: {
        type: String,
        required:"Please Enter"
    },
    Asset_Code: {
        type: Number,
        required:"Please Enter"
    },
    Make: {
        type: String,
        required:"Please Enter"
    },
    Condition: {
        type: String,
        required:"Please Enter"
    },
    Comments: {
        type: String,
        required:"Please Enter"
    }
});

module.exports = mongoose.model("items", itemSchema);