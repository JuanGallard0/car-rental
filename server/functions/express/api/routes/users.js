const express = require("express");
const router = express.Router();
const firebaseAuth = require("../../middleware/firebase-auth");

const getUserById = require("../controllers/users");

router.get("/:id", firebaseAuth, getUserById);

module.exports = router;
