const mongoose = require('mongoose');
const URL = "mongodb+srv://rushi264:viitpune@cluster0.000lv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("err", () => {
    console.log("something wrong while connecting to db");
})

db.once("open", () => {

    console.log("connected successfully");
})

module.exports = mongoose;