const express = require("express");

const app =express();
const port = 3000;

app.get("/home",(req,res)=>{
    res.send("This is home page")
});

app.get("/contact",(req,res)=>{
    res.send("Contact Us at contact@gmail.com");
})

app.listen(port,()=>{
    console.log(`App is running at port ${port}`)
})