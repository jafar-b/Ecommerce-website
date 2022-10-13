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






app.post("/SignUp", (req, res) => {
  const { name, email, pass, pass2 } = req.body;
  const user = new usermodel({ name, email, pass, pass2 });


  if (!name || !email || !pass || !pass2) {
    res.status(400).json({ "error": "please enter fields proeprly" });
  }

else{

  usermodel
  .findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        res.status(201).json({ "message": "USER EXISTS" });
       
      }
    }).then(()=>{

      
      
  user
    .save()
    .then(() => {
      res.status(200).json({ "success": " signup data saved successfully" });
    })
    .catch((err) =>
      res.status(500).json({ "signup error hai bhai": "data save nhi hua" })
    );
  }).catch((err)=>{res.json({"error":"error hai bhai"})});
  }
});







app.get("/Login", (req, res) => {
  const { email, pass } = req.body;
  console.log(email); 
  console.log(pass);
  res.json({ message: req.body });
});

app.get("/api/sample", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
});

app.listen(port, () => {
  console.log("server listening at port ", port);
  mongoose
    .connect(url).then(() => console.log("connection successfull"));
});
