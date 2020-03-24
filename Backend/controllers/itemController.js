/*"use strict"

var mongoose = require('mongoose'),
Item = mongoose.model("items");

exports.All_items = function(req, res) {
    Item.find({}, function (err, item) {
        if(err)
            res.send(err);
        res.json(item);
    });
}

exports.add_new_items = function (req, res) {
    var new_item = new Item(req.body);
    new_item.save(function (err, item) {

        if (err)
            res.send(err);
        res.json(item);
    });
}

exports.read_items = function (req, res) {

    Item.findById(req.params.itemId, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};*/