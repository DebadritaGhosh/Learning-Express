const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => { res.sendFile(path.resolve(__dirname) + "/index.html") });

app.get("/about", (req, res) => { res.sendFile(path.resolve(__dirname) + "/about.html") });




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Hello Server!!"));