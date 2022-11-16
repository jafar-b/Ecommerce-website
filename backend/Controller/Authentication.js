



export const Authentication=(req,res)=>{
if(req.user){
    console.log(req.user);
    res.json({message:"This is Authentication file.."});

}



}



