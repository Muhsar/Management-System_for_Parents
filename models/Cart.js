var mongoose = require('mongoose')
const CartSchema = new mongoose.Schema({
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
  student_id:{
    type: String
  },
  quantity:{
    type: Number
  },
  status:{
    type: String
  },
  product_id:{
    type: String
  },
  total:{
    type: Number
  }
})
const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;
