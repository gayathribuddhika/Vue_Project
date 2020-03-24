const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';


router.get('/', async(req, res) => {
    const records = await loadRecordscollection();
    res.send(await records.find({}).toArray());
});

router.post('/', async (req, res) => {
    const records = await loadRecordscollection();
    await records.insertOne({
        Id: req.body.id,
        Main_Category: req.body.Main_Category,
        Asset_Description: req.body.Asset_Description,
        Asset_Code: req.body.Asset_Code,
        Qty: req.body.Qty,
        Make: req.body.Make,
        Condition: req.body.Condition,
        Comments: req.body.Comments
    });
    
    res.status(201).send();
});

/*router.post('/', function(req,res){ 
        var id = req.body.Id;
        var category = req.body.Main_Category;
        var description = req.body.Asset_Description;
        var code = req.body.Asset_Code;
        var qty = req.body.Qty;
        var make = req.body.Make;
        var condition = req.body.Condition;
        var comment = req.body.Comments;
    
        var data = { 
        "Id": id, 
        "Main_Category": category, 
        "Asset_Description": description, 
        "Asset_Code": code,
        "Qty": qty,
        "Make":make,
        "Condition":condition,
        "Comments":comment
    } 
    
db.collection('CIS/LAB/01').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
          
    }); 
         
    return res.redirect('./adminpanel/currentstatus'); 
}) 
*/


async function loadRecordscollection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("CIS/LAB/01")
}





module.exports = router;