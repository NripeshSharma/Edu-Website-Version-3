const path = require("path");
const express = require("express");

const app = express();

// const templatePath = path.join(__dirname);

// app.set('view engine', 'hbs');


staticpath = path.join(__dirname,"../public");
app.use(express.static(staticpath));

app.get("/", (req,res)=>{
    res.send("Hello from the express server");
});

// console.log("__dirname:    ", __dirname);

app.listen(8000, () =>{
    console.log("listiing The port at 8000");
});