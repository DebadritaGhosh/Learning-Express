const express = require("express");
const path = require("path");

const app = express();

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


//Server
app.listen(PORT, () => { console.log("Running......."); });