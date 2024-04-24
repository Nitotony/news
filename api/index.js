import mongoose from "mongoose";
import express from "express";



const app= express();


app.listen(3005,()=>{
    console.log("server is listening on Port 3005");
})