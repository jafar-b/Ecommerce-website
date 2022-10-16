import mongoose from "mongoose";
import express, { urlencoded } from "express";
import cors from "cors";
const app = express();
const port = 5000;
import prodmodel from "./Models/ProductSchema.js";
import usermodel from "./Models/UserSchema.js";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const url =
  "mongodb+srv://root:root@cluster0.q9yicuo.mongodb.net/ecom?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.post("/Signup", async (req, res) => {
  const { name, email, pass, pass2 } = req.body;

  if (!name) {
    return res.status(400).json({ error: "no name" });
  }

  if (!email) {
    return res.status(400).json({ error: "no email" });
  }

  if (!pass) {
    return res.status(400).json({ error: "no password" });
  }

  if (!pass2) {
    return res.status(400).json({ error: "no confirm pass" });
  }

  const user = new usermodel({
    name: name,
    email: email,
    pass: pass,
    pass2: pass2,
  });

  user.save();
});

app.get("/api/Login", (req, res) => {
  const { email, pass } = req.body;
  if (!email || !pass) {
    res.status(500).json({ error: "please input email and password" });
  }

  usermodel
    .findOne({ email: email, pass: pass })
    .then((userExist) => {
      if (userExist) {
        res.status(200).json({ success: "logged in successfully" });
      } else {
        res.status(404).json({ error: "USER NOT FOUND PLEASE SIGNUP FIRST" });
      }
    })
    .catch((err) => {
      console.log("findOne ME ERROR HAI");
    });
});

app.listen(port, () => {
  console.log("server listening at port ", port);
  mongoose
    .connect(url)
    .then(() => console.log("connection successfull"))
    .catch((e) => {
      console.log("connection failed  ", e);
    });
});
