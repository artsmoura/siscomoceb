const express = require("express");
const { getChurch } = require("../controllers/church.js");
const Auth = require("../middleware/auth.js");

const router = express.Router();

router.get('/', getChurch);

module.exports = router;