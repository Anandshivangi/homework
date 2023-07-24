const fs = require("fs");
const http = require("http");
const url = require("url");
const port = 8080;
const express = require("express");
const app = express();
const path = require("path");
const { log } = require("console");
const static = path.join(__dirname, "./Public");
const bodyParser = require('body-parser');

console.log(__dirname);
console.log(static);

const hbs = require('hbs');



app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "/View"));

hbs.registerPartials(path.join(__dirname, './View/partials'));


app.get("/", function (req, res) {

    res.render("profile", {
        demo: "shivii"
    });
});


app.get("/about", function (req, res) {
    res.render("about");
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Page Not Found</h1>');
});

app.listen(4040, () => {
    console.log("data is changed in profile.hbs file");
});

// app.get("/",(err,data)=>{
//     const filePath = "indexx.html";

// fs.readFile(filePath,'utf-8',(res,req)=>{
//     // console.log(req);
//     const newContent = req.replace('world','shivii');
//     data.write(req);
//     data.end(newContent);
// });

// });

// app.listen(9090,()=>{
//     console.log("server created ;o(");
// });


// app.get("/", (req, res) => {
//     const filePath = "./public/demo.html";

//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         console.log(data);
//          res.end(data);
//     });
// });

// app.use(express.static(static,{ index: 'demo.html' }));

// app.listen(port,()=>{
//     console.log(`server is working on port ${port} :}`);
// })



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/",(req,res)=>{
//     const requestData = req.body;
//     res.json({ message: 'POST request handled successfully!', requestData });
//     console.log(requestData);
// })
// app.listen(9000,()=>{
//     console.log(`server is working on port 9000`);
// })
