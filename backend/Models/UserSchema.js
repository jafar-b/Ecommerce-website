import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  pass2: String,
  tokens: [{ token: String }],
});

//Generating auth token:

// UserSchema.methods.generateAuthToken = async function () {
//   try { 
//     let token = jwt.sign({ _id: this._id.toString() }, "MYNAMEISJAFARANDTHISISMYSECRETKEY");
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token; 
//   } catch (err) {
//     console.log(err);
//   }
// };

const usermodel = mongoose.model("USERDETAIL", UserSchema);

export const schema = usermodel.schema;
export default usermodel;
