const express = require("express");
const app = express();
const path = require("path");


app.set('view engine', 'ejs'); // setting view engine

console.log(app.get('view engine')); // will show us current view engine





//Routes
app.get("/", (req, res) => {
    res.render('index', {
        title: "Welcome to Home Page"
    })
});

app.get("/about", (req, res) => {
    res.render('about', {
        title: "Welcome to About Page"
    })
});

//Route + Download File

app.get("/download", (req, res) => {
    //Downloading about.html file
    res.download(path.resolve(__dirname) + "/views/about.ejs");
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Hello Server!!"));