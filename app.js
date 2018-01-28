const express = require("express"), mongoose = require("mongoose");

let app = express();

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://bookworm123:assassin123@ds117148.mlab.com:17148/bookworm", { useMongoClient: true}, (err) => {
    if (err) return console.log(err);

    console.log("Connection to DB created...")
});

let db = mongoose.connection;



app.set("port", process.env.PORT || 8080);
app.set("env", process.env.NODE_ENV || "development");
app.set("view engine", "pug");

let router = require("./routes");

app.use("/", router);

app.listen(app.get("port"), () => console.log(`App is listeing on ${app.get("port")}`));
