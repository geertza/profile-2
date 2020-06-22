var express = require("express");
var router = express.Router();
const pug = require('pug');
// Import the model (burger.js) to use its database functions.
// var model = require("../model/model.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    pug.renderFile('index');
});

// router.post("/", function(req, res) {
//   model.create({
// });})

  
  
router.post("/:id", (req, res) => {
  
  })

   
  router.get("/delete",(req, res) => {
      
    });

// Export routes for server.js to use.
module.exports = router;
