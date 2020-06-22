const express = require('express')
const path = require('path')
const app = express()
var bodyParser= require("body-parser")
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Load static View Engine
app.use(express.static(__dirname + '/public'));


app.get('/',function (req,res){
    res.render('index')
})

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080,function(){
    console.log('server on port 8080...');
})