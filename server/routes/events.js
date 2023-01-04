const express = require("express");
const { getEvents, createEvent } = require("../controllers/event.js");
const { Auth } = require("../middleware/auth.js");

const router = express.Router();

router.get('/', getEvents);
router.post('/eventcreate', Auth, createEvent);

module.exports = router;

