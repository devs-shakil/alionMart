const express = require('express');

const router = express.Router();


//controller
const {register, login, secret, updateProfile} = require("../controllers/auth.js");

//middleware
const { requireSignIn, isAdmin } = require('../middleware/auth.js');


router.post("/register", register);
router.post('/login', login)

router.get('/auth-check', requireSignIn, (req, res) =>{
    res.json({ok:"true"})
});

router.get('/admin-check',requireSignIn , isAdmin, (req, res) => {
    res.json({ok:"true"})
});

//testing 
router.get("/secret", requireSignIn, isAdmin, secret);

router.put('/profile', requireSignIn, updateProfile)

module.exports = router;