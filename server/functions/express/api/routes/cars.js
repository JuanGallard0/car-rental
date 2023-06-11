const express = require("express");
const router = express.Router();

const { getAllCars } = require("../controllers/cars");

router.get("/", getAllCars);

module.exports = router;
