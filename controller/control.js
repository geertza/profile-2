var express = require("express");
var router = express.Router();
const path = require('path')
const nodemailer = require("nodemailer");
// Import the model (burger.js) to use its database functions.
// var model = require("../model/model.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../views/', 'index.html'));
});

// router.post("/", function(req, res) {
//   model.create({
// });})

  
  
router.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, '../views/', 'projects.html'));
  })
router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/', 'about.html'));
    })
router.get("/demo", (req, res) => {
      res.sendFile(path.join(__dirname, '../views/', 'demo.html'));
      })
   
router.post("/contact",(req, res) => {  
    res.redirect("/")
    });

  

// Export routes for server.js to use.
module.exports = router;
