const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/portfolio", function(req, res){
    res.sendFile(path.join(__dirname, "../public/portfolio.html"))
});

router.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "../public/contact.html"))
});

module.exports = router;