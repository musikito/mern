const express = require('express')
const app = express()
//const port = 3000;
const port = process.env.PORT || 3000;

const data = require("./data2");

console.log(data);

//app.get('/', (req, res) => res.send('Hello World!'))

app.get("/", function(req,res){
    console.log(req.query.message);
    res.send("Hello World!");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))