const express = require("express");

let app = express();

app.set("port", process.env.PORT || 8080);
app.set("env", process.env.NODE_ENV || "development");
app.set("view engine", "pug");

app.get("/", (req, res, next) => {
    return res.render("index");
});

app.listen(app.get("port"), () => console.log(`App is listeing on ${app.get("port")}`));