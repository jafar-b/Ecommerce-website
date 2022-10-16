
// const mongoose = require('mongoose')
import mongoose from "mongoose";

const url ="mongodb+srv://root:root@cluster0.q9yicuo.mongodb.net/ecom?retryWrites=true&w=majority";

mongoose.connect(url,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).then(()=>{
  console.log("connection successfull");
}).catch(err=>console.log("connection failed   => ",err));
