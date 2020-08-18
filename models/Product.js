var mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
  name:{
    type:String
  },
  price:{
    type:Number
  },
  detail:{
    type:String
  },
  category:{
    type:String
  },
  image:{
    type:String
  },
  school_id:{
    type:String
  },
  product_id:{
    type: String
  }
})
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
