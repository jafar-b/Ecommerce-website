import { mongoose } from "mongoose";
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import { useState } from "react";
import prodmodel from "./Models/ProductSchema.js";
// import showproducts from "./Controller/Product/Showproducts.js";
import { Login, Signup } from "./Controller/User.js";
import { showproducts, updateproduct } from "./Controller/Product.js";

import cors from "cors";
const app = express();
const port = 5000;
app.use(cookieParser())
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
app.listen(port, () => {
  console.log("server listening at port ", port);
  mongoose
    .connect(url)
    .then(() => console.log("connection successfull"))
    .catch((e) => {
      console.log("connection failed", e);
    });
});
