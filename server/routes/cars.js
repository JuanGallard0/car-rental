const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/cars");

router.get("/", getAllProducts);

module.exports = router;
