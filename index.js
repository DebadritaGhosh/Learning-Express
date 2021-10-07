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


////Init Middleware
app.use(logger);

//rendering json (GET all members)
app.get("/api/members", (req, res) => {
    res.json(members);
});
//rendering json (GET single members)
app.get(`/api/members/:id`, (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({ msg: 'Member not found' });
    }
})

//Server
app.listen(PORT, () => { console.log("Running......."); });