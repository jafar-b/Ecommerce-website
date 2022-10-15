import mongoose from "mongoose";
import express from "express";
import cors from "cors";
const app = express();
const port = 5000;
import prodmodel from "./Models/ProductSchema.js";
import usermodel from "./Models/UserSchema.js";
app.use(cors());
app.use(express.json());

const url =
  "mongodb+srv://root:root@cluster0.q9yicuo.mongodb.net/ecom?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/api/Signup", (req, res) => {
  const { name, email, pass, pass2 } = req.body;

  if (!name || !email || !pass || !pass2) {
    return res.status(400).json({ error: "please enter fields properly." });
  }
  usermodel
    .findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ message: "user already exists" });
      }
      const user = new usermodel({ name, email, pass, pass2 });

      user
        .save()
        .then(() => {
          return res
            .status(200)
            .json({ success: " signup data saved successfully" });
        })
        .catch((err) => console.log("error data not saved"));
    })
    .catch((err) => {
      console.log("error hai bhai pure code me");
    });
});

app.get("/api/Login", (req, res) => {
  const { email, pass } = req.body;
  if (!email || !pass) {
    res.status(500).json({ error: "please input eemail and password" });
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
  mongoose.connect(url).then(() => console.log("connection successfull"));
});
