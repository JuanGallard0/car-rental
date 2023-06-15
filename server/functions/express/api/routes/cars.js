const express = require("express");
const router = express.Router();

const { getAllCars, updateAvailability } = require("../controllers/cars");
const firebaseAuth = require("../../middleware/firebase-auth");

router.get("/", getAllCars);
router.patch("/updateavailability", firebaseAuth, updateAvailability);

module.exports = router;
