const fs = require("fs");
// const http = require("http");
// const url = require("url");
const express = require("express");
const app = express();
const path = require("path");
const static = path.join(__dirname, "./Public");
console.log(static);


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


// app.get("/", (err, data) => {
//     const filePath = "./public/demo.html";

//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         console.log(data);
//     });
// });

app.use(express.static(static,{ index: 'demo.html' }));

app.listen(8080,()=>{
    console.log("server is working :}");
})
