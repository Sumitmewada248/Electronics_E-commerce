const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();
const port=process.env.PORT;
const mongoose = require('mongoose');
const adminRoute=require('./Routes/adminRoute');
const productRoute=require('./Routes/productRoute')
const userRoute=require('./Routes/userRoute')
const paymentRoute = require("./Routes/payment");
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect(process.env.MONGOCONNECT).then((res)=>console.log("DB connected"));

app.use("/admin",adminRoute);
app.use('/product',productRoute)
app.use("/user",userRoute)
app.use("/api/payment/",paymentRoute);

app.use('/uploads', express.static('uploads'))
app.listen(port,()=>console.log(`Server is running on port ${port}`));
