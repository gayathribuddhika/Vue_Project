const express = require('express');
const router = express.Router();

//get posts
router.get('/', (req, res) => {
    res.send("Hello Contacts");
});

router.get('/', (req,res) => {
    res.write("whatever you want to display");
    res.end()
});

module.exports = router;