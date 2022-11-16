import mongoose, { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema({

    name:String,
    email:String,
    pass:String,
    pass2:String,
    // tokens:[{token:String}],
    token:String
    
})


const usermodel = mongoose.model('USERDETAIL', UserSchema);

export const schema =usermodel.schema;
export default usermodel;


