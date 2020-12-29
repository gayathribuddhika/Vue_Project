const express = require("express")
const router = express.Router()
const cors = require("cors")

const User = require("../models/user_details")
router.use(cors())

module.exports = router;