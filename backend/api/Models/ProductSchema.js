import {mongoose, Schema } from 'mongoose';

const ProdSchema=new Schema({
    Name:String,
    Price: String,
    Body: Object,
    Category: String,
    Company: Object,
    Source: String,
    Link: String,
    Duplicates: Object,
    id: String,
    Image:String, 
});




const prodmodel = mongoose.model('products', ProdSchema);

export const schema = prodmodel.schema;
export default prodmodel;

