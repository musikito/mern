const express = require('express');

//set up app
const app = express();

app.get('/', function(req, res){

  console.log("GET requests");
    res.end();
});

//listening for requests
app.listen(process.env.pot || 3000, function(){
  console.log("Now listening for requests");


})//end of app.listen callback
