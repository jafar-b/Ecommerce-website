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

// "Name": "Bowflex EZ Pro Strapless Heart Rate Monitor Watch, Black",
// "Price": "$12.99 ",
// "Body": {
//   "Location": "Wrist"
// },
// "Category": "Medical",
// "Company": {
//   "Name": "Bowflex",
//   "URL": "http://www.bowflex.com/"
// },
// "Source": "Google Results",
// "Link": "https://www.google.com/shopping/product/14794259305726304004?q=wearable+technology&safe=off&prds=paur:ClkAsKraXzDxIOdFgsDRrE5ReEWw6TRjxM6UjJXHO2_ATXbJbQv--XIEl2PRtK9Z4GMiK9MAkEQu-iJtA0dItYAxKRwoVYq-FxmvtLJZYl9umpPBXbViEZj9CBIZAFPVH70yBu-kDw-pJoHa22Cz59yli4PX4Q&sa=X&ei=aA92VLmPGejhsATj5IK4BQ&ved=0CMABEPMCMAM4mAI",
// "Duplicates": {
//   "note": {}
// },
// "id": "284",
// "Image": "data:image/j


const prodmodel = mongoose.model('po', ProdSchema);

export const schema = prodmodel.schema;
export default prodmodel;

