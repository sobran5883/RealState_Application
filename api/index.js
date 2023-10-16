import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
    .connect("mongodb+srv://sobran:sobran@mern-estate.yvvke0o.mongodb.net/?retryWrites=true&w=majority")
    // .connect(process.env.MONGO)
    .then(()=>{
        console.log("Connected to MongoDG!");
    })
    .catch((err)=>{
        console.log(err);
    });


const app=express();

app.listen(3000, ()=>{
        console.log('server is running on port 3000');
    }
);