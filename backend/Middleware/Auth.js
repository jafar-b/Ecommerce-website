import jwt from "jsonwebtoken";
import Cookies from "universal-cookie";
import usermodel from "../Models/UserSchema.js";  

const Auth = (req, res, next) => { 
  const cookie = new Cookies();

try{

const token=cookie.get("token_id") ||req.headers.token||req.body.token;

if(!token||token===null|| token==="undefined" )
{
  res.status(400).send("NO TOKEN PROVIDED...");
}
try{

  const decoded=jwt.verify(token,"SECRET");
  usermodel.findOne({token:token}).then((userExist)=>{
if(userExist.token===token){
  console.log("token verified.");
  next();
}else{
  console.log("token not verified");
}

  })


  req.user=decoded;


  next();
}catch(err){
  console.log("error in verifying: "+err);
}



}catch(err){
  console.log("error in middleware try.."+err);
}


 next(); 
 
};

export default Auth;
