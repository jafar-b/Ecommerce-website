import usermodel from "../Models/UserSchema.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import Auth from "../Middleware/Auth.js";

export const Login = (req, res) => {
  let token;
  const JWT_SECRETKEY = "SECRET";

  const { email, pass } = req.body;
  if (!email || !pass) {
    res.status(400).json({ message: "please input email and  password" });
  }

  usermodel
    .findOne({ email: email, pass: pass })
    .then((userExist) => {
      if (userExist) {
         token = jwt.sign({ _id: userExist._id }, JWT_SECRETKEY, {
          expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
        });
        // res.cookie("token_id",token,options);
        userExist.token = usermodel
          .findOneAndUpdate(
            { _id: userExist._id },
            {
              token: token,
            },
            { new: true }
          )
          .exec();

        // userExist.save();

        res.status(200).json({
          token: token,
          user: userExist._id,
        });
      } else {
        res.status(404).json({
          message: "USER NOT FOUND PLEASE SIGNUP FIRST",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

export const Signup = async (req, res) => {
  const { name, email, pass, pass2 } = req.body;
  if (!name) {
    return res.status(422).json({ error: "no name" });
  }
  if (!email) {
    return res.status(422).json({ error: "no email" });
  }
  if (!pass) {
    return res.status(422).json({ error: "no password" });
  }
  if (!pass2) {
    return res.status(422).json({ error: "no confirm pass" });
  }

  const user = new usermodel({
    name: name,
    email: email,
    pass: pass,
    pass2: pass2,
  });

  usermodel
    .findOne({ email: email })
    .then((userExists) => {
      if (userExists) {
        res.status(400).json({ error: "User exists." });
      } else {
        user
          .save()
          .then(() => {
            res.status(200).json({ Message: "data saved successfully" });
            console.log("Registration succesfull please login.");
          })
          .catch((err) => {
            res.status(500).json({ err: "data not saved" });
          });
      }
    })
    .catch((err) => res.status(500).send({ message: "database error" }));
};
