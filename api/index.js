import express from 'express'; //express framework to easily create our backend and API's
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
dotenv.config(); //initializing donenv
import path from 'path';

mongoose
    .connect("mongodb+srv://sobran:sobran@mern-estate.yvvke0o.mongodb.net/?retryWrites=true&w=majority")
    // .connect(process.env.MONGO)
    .then(()=>{
        console.log("Connected to MongoDB!");
    })
    .catch((err)=>{
        console.log(err);
    });

    const __dirname = path.resolve();

const app=express();

app.use(express.json()); //allow JSON as the input of the server

app.use(cookieParser());

app.listen(3000, ()=>{
        console.log('server is running on port 3000');
    }
);


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

//MiddleWare for error handling and we using it in auth.controller.js as next(error)
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});