const express = require('express');

const router = express.Router();


//controller
const {register} = require("../controllers/auth.js");
router.post("/register", register);

module.exports = router;