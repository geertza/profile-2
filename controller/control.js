var express = require("express");
var router = express.Router();
const path = require('path')


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../views/', 'index.html'));
});
  
  
router.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, '../views/', 'projects.html'));
  })

  router.get('/demo/:id', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/', 'demo.html'));
  })

// Export routes for server.js to use.
module.exports = router;
