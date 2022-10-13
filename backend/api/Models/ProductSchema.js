import mongoose, { Schema } from 'mongoose';

const ProdSchema=new Schema({
    Name:String,
    Price: String,
    Body: { Location: String },
    Category: String,
    Company: { Name: String, URL: String },
    Source: String,
    Link: String,
    Duplicates: { note: String },
    id: String,
    Image:String, 
});




const prodmodel = mongoose.model('prod', ProdSchema);

export const schema = prodmodel.schema;
export default prodmodel;

