
const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
const router = express.Router();

//MongoDb address, could be local or hosted on Mlab, Atlas
const dbRoute = "mongodb+srv://jmarte:Papiton%231@dict-h28av.mongodb.net/Dict?retryWrites=true";

//connect our backend with the DB
mongoose.connect(
    dbRoute,
    {useNewUrlParser:true}
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the DB"));

//check for the connection
db.on("error",console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

//get method
//fetches all available data in our database
router.get("/getData",(req, res)=>{
    Data.find((err, data) => {
        if(err) return res.json({success: false, error: err});
        console.log(data[0]);
        return res.json({success: true, data: data});
    })
});
// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});


//append /api for our http requests
app.use("/api", router);

//launch our backend into an available port
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}` ));
