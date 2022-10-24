import { mongo } from "mongoose";
// import prodmodel from "../Models/ProductSchema.js";

export const showproducts = async (req, res) => {
//   const { Name,Price,Body,Category,Company,Source,Link,Duplicates,id,Image}=req.Body;
//     const product=new prodmodel({
//         Name,Price,Body,Category,Company,Source,Link,Duplicates,id,Image
//   });


// const product= await product.find();
res.send(req.body);

};

export const updateproduct=async(req,res)=>{

}

 