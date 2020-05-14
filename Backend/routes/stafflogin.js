const express = require("express")
const router = express.Router()
const cors = require("cors")

const Staff = require("../models/staff_details")
router.use(cors())

router.get('/stafflogin', (req, res) => {
    Staff.find(function (err, staff) {
        if (err) {
            res.json(err);
        }
        res.json(staff);
    });
});

module.exports = router;

