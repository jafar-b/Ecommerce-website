import { mongoose } from "mongoose";
import express, { urlencoded } from "express";
import { Authentication } from "./Controller/Authentication.js";
import cookieParser from "cookie-parser";
import Auth from "./Middleware/Auth.js";
import { useState } from "react";
import prodmodel from "./Models/ProductSchema.js";
// import showproducts from "./Controller/Product/Showproducts.js";
import { Login, Signup } from "./Controller/User.js";
import { showproducts, updateproduct } from "./Controller/Product.js";
import cors from "cors";
const app = express();
const port = 5000;
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let database;
const url = 
  "mongodb+srv://root:root@cluster0.q9yicuo.mongodb.net/ecom?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.post("/Signup", Signup);
app.get("/products", showproducts);
app.post("/Login", Login);
app.post("/Secret",Auth,(req,res)=>{

  res.status(200).send("Welcome to Secret page.");

});



app.get("/Secret", (req, res) => {
res.cookie=req.headers.token_id;
  res.json({ body: req.body, Headers: req.headers,cooooooooooookie:res.cookie});

});

app.listen(port, () => {
  console.log("server listening at port ", port);
  mongoose
    .connect(url)
    .then(() => console.log("connection successfull"))
    .catch((e) => {
      console.log("connection failed", e);
    });
});
