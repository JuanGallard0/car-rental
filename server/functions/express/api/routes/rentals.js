const express = require("express");
const router = express.Router();
const firebaseAuth = require("../../middleware/firebase-auth");

const { createRental } = require("../controllers/rentals");

router.post("/create", firebaseAuth, createRental);

module.exports = router;
