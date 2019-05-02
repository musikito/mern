var express = require('express');
var app = express();
const port = process.env.PORT || 5000;

//Simple request time logger
app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());

   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware
   function/route handler.
   next();
});

//listening for requests
app.listen(port, () => {console.log(`Listening for requests on port ${port}`)});
