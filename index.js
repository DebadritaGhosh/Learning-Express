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

//Json

const members = [
    {
        id: 1,
        name: "Debadrita Ghosh",
        email: "debadrita.ghosh2010@gmail.com"
    },
    {
        id: 2,
        name: "Paushali Majumder",
        email: "paushali@gmail.com"
    },
    {
        id: 3,
        name: "Sourav Saha",
        email: "sourav@gmail.com"
    },
    {
        id: 4,
        name: "Shreya Ghosh",
        email: "shreya@gmail.com"
    }
]


//rendering json
app.get("/api/members", (req, res) => {
    res.json(members);
});

//Server
app.listen(PORT, () => { console.log("Running......."); });