const express = require("express");
const path = require("path");
const members = require("./Members");
const app = express();
const moment = require("moment");
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

//Middleware
//// Creating middleWare
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}
////Init Middleware
app.use(logger);


//rendering json (GET all members)
app.get("/api/members", (req, res) => {
    res.json(members);
});

//Server
app.listen(PORT, () => { console.log("Running......."); });