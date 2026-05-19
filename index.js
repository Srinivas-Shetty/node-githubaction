const express=require('express')

let app=express();

app.get('/',(req,res)=>{
    res.json({"message":"Server is up and running"})
})

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})