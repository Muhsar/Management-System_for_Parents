var mongoose = require('mongoose')
const ReceiptSchema = new mongoose.Schema({
  clas:{
    type:String
  },
  fees:{
    type:Number
  },
  amountPaid:{
    type:Number
  },
  student_id:{
    type:String
  },
  school_id:{
    type:String
  },
  name:{
    type:String
  },
  schoolName:{
    type:String
  },
  surname:{
    type:String
  },
  day:{
    type: String
  },
  month:{
    type: String
  },
  year:{
    type: String
  },
  paidAmount:{
    type:Number
  },
  date:{
    type: Date,
    default: Date.now
  }
})
const Receipt = mongoose.model('Receipt', ReceiptSchema);
module.exports = Receipt;
