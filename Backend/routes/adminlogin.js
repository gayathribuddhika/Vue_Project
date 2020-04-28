const express = require("express")
const router = express.Router()
const cors = require("cors")

const Admin = require("../models/admin_details")
router.use(cors())

router.get('/', (req, res) => {
    Admin.find(function (err, admin) {
        if (err) {
            res.json(err);
        }
        res.json(admin);
    });
});

module.exports = router;

