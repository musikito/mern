const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//this will be our DB data structure
const DataSchema = new Schema(
    {
    id: Number,
    word: String
},
{timestamps: true}
);

//export the new Schema so we could modify it using Node
module.exports = mongoose.model("Data",DataSchema);