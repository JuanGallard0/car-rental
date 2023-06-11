const express = require("express");
const router = express.Router();
const validateEmailAndPassword = require("../../middleware/validate-email-and-password");

const { register, login } = require("../controllers/auth");

router.post("/register", validateEmailAndPassword, register);
router.post("/login", validateEmailAndPassword, login);

module.exports = router;
