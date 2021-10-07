const express = require("express");
const path = require("path");
const members = require("./Members");
const app = express();
const logger = require("./middleware/logger");
const PORT = process.env.PORT || 5000;

//Route
app.get("/", (req, res) => {
    res.send("<h1>Hello Express</h1>");
});
//rendering HTML file
app.get("/web", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.use("/api/members", require('./routes/api/members'));

//Server
app.listen(PORT, () => { console.log("Running......."); });