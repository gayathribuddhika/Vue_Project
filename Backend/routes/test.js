const express = require("express")
const router = express.Router()
const url = "mongodb://localhost:27017/"

router.post('/', function (req, res, next) {
    MongoClient.connect(url, {
    useNewUrlParser: true
    }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Inventory_FAS");
    req.body.dateOfEntry = new Date();
    req.body.isDeleted = "false";
    var countRow;
    var sequenceDocument = dbo.collection("test").findOneAndUpdate({
    _id: "tid"
    }, {
    $inc: {
    sequence_value: 1
    }
    }, {
    new: true
    });
    dbo.collection("counterVisualization").find({
    _id: "tid"
    }).toArray(function (err, result1) {
    if (err) {
    throw err;
    } else {
    countRow = result1[0].sequence_value;
    req.body["_id"] = countRow;    
    dbo.collection("visualization").insertOne(req.body, function (err, resDB) {
    if (err) {
    throw err;
    res.status(401);
    res.send({
    "status": 401,
    "message": "Some error happened"
    });
    } else {
    console.log("1 document inserted");
    res.status(201)
    res.send({
    "body": req.body,
    "status": 201,
    "message": "visualization has been added"
    });
    }
    });
    }
    });
    });
  });

module.exports = router;
