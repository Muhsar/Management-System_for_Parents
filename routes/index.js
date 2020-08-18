var express = require('express');
var router = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const key = process.env.SECRET_KEY || 'secret'
router.use(cors())
const Student = require('../models/Students')
const Result = require('../models/Result')
const Teacher = require('../models/Teacher')
const News = require('../models/News')
const Bill = require('../models/Bill')
const StudentBill = require('../models/StudentBill')
const Chat = require('../models/Chat')
const ChatPage = require('../models/ChatPage')
const Receipt = require('../models/Receipt')
const Product = require('../models/Product')
const Cart = require('../models/Cart')
router.get('/products', (req,res)=>{
  const decode = jwt.verify(req.headers['authorization'],key)
  Product.find({category:'General', category:decode.clas, school_id:decode.school_id})
    .then(products=>{
      res.json(products)
    })
    .catch(err => res.status(400).json('Error: ' + err))
})
router.get('/cart',(req,res)=>{
  const decode = jwt.verify(req.headers['authorization'],key)
  Cart.find({category:'General', category:decode.clas, school_id:decode.school_id, student_id:decode.student_id})
    .then(cart=>res.json(cart))
    .catch(err => res.status(400).json('Error: ' + err))
})
router.get('/product/:product_id',(req,res)=>{
  Product.findOne({product_id: req.params.product_id, school_id:decode.school_id})
    .then(product=>res.json(product))
    .catch(err => res.status(400).json('Error: ' + err))
})
router.post('/cart',async(req,res)=>{
  const total = Number(req.body.price) * Number(req.body.quantity)
  const newCartProduct = new Cart({
    name:req.body.name,
    price:req.body.price,
    detail:req.body.detail,
    category:req.body.category,
    image:req.body.image,
    school_id:req.body.school_id,
    student_id:req.body.student_id,
    quantity:req.body.quantity,
    status:'pending',
    product_id:req.body.product_id,
    total
  })
    newCartProduct.save()
      .then(res.json({msg:'Item Added to cart'}))
})
router.get('/cart/:id',(req,res)=>{
  Cart.findByID({_id:req.params.id})
    .then(cart=>res.json(cart))
})
router.post('/cart/:id',(req,res)=>{
  const total = Number(req.body.price) * Number(req.body.quantity)
  Cart.findByIDAndUpdate({_id:req.params.id}, {
    $set: {
      quantity:req.body.quantity,
      total
    }
  }, {
    new: true,
    runValidators: true,
    upsert: true,
    returnOriginal: false,
    returnNewDocument: true
  }).exec()
    .then(res.json('Item Updated Successfully'))
})
router.delete('/cart/:id',(req,res)=>{
  Cart.findByIDAndDelete({_id:req.params.id})
    .then(res.json({msg:'Item Successfully Deleted'}))
})
router.get('/students',  (req, res) =>{
  var decode = jwt.verify(req.headers['authorization'], key)
  Student.find({school_id:decode.school_id,status:'registered',clas:decode.clas})
  .then(students => res.json(students))
  .catch(err => res.status(400).json('Error: ' + err))
});
router.get('/student/:student_id', (req,res)=>{
  var decode = jwt.verify(req.headers['authorization'],key)
  Student.findOne({student_id:req.params.student_id,clas:decode.clas})
  .then(student => res.json(student))
  .catch(err => res.status(400).json('Error: ' + err))
})
router.get('/teacher_info/:clas', (req,res)=>{
  var decode = jwt.verify(req.headers['authorization'],key)
  Teacher.findOne({clas:req.params.clas,school_id:decode.school_id})
  .then(teacher => res.json(teacher))
  .catch(err => res.status(400).json('Error: ' + err))
})
router.get('/signup/:student_id', (req,res)=>{
  Student.findOne({student_id:req.params.student_id,signup:false})
  .then(student => res.json(student))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/studentbill',(req,res)=>{
  var decode = jwt.verify(req.headers['authorization'], key)
  StudentBill.find({school_id:decode.school_id,status:'debtor',clas:decode.clas})
  .then(studentBill => res.json(studentBill))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/news', (req,res)=>{
  var decode = jwt.verify(req.headers['authorization'], key)
  News.find({school_id:decode.school_id})
  .sort({date:-1})
  .then(news => res.json(news))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/result/:student_id', (req,res)=>{
  var decode = jwt.verify(req.headers['authorization'], key)
  Result.find({school_id:decode.school_id,student_id:req.params.student_id})
  .sort({date:-1})
  .then(result => res.json(result))
  .catch(err => res.status(400).json('Error: ' + err))
})


router.get('/1sttermresult/:student_id', (req,res)=>{
  Result.find({student_id:req.params.student_id,term:'1st Term'})
  .then(results => res.json(results))
  .catch(err => res.status(400).json('Error: ' + err))
})
router.get('/2ndtermresult/:student_id', (req,res)=>{
  Result.find({student_id:req.params.student_id,term:'2nd Term'})
  .then(results => res.json(results))
  .catch(err => res.status(400).json('Error: ' + err))
})
router.get('/3rdtermresult/:student_id', (req,res)=>{
  Result.find({student_id:req.params.student_id,term:'3rd Term'})
  .then(results => res.json(results))
  .catch(err => res.status(400).json('Error: ' + err))
})


router.post('/signup/:student_id', async(req,res)=>{

  await Student.findOne({
    signup:true,student_id:req.params.student_id
  })
  .then(student=>{
    if(!student){
      bcrypt.hash(req.body.password,10,(err,hash)=>{
        Student.findOneAndUpdate({student_id:req.params.student_id }, {
          $set: {password:hash,signup:true}
        }, {
          new: true,
          runValidators: true,
          upsert: true,
          returnOriginal: false,
          returnNewDocument: true
        }).exec()
        .then(res.json('Sign Up Successful'))
        .catch(err => res.status(400).json('Error: ' + err))
      })
    }else{
      res.json({error:'Student Already exist'})
    }
  })
  .catch(err=>{
    res.send('error' + err)
  })
})

router.post('/login',(req,res)=>{
  Student.findOne({email:req.body.login})
  .then(student=>{
    if(student){
      if(bcrypt.compareSync(req.body.password, `${student.password}`)){
        const payload = {
          _id : student._id,
          name:student.name,
          surname:student.surname,
          clas:student.clas,
          department:student.department,
          gender:student.gender,
          religion:student.religion,
          sog:student.sog,
          lga:student.lga,
          student_id:student.student_id,
          school_id:student.school_id,
          address:student.address,
          pname:student.pname,
          psurname:student.psurname,
          email:student.email,
          number:student.number,
          paddress:student.paddress,
          age:student.age
        }
        let token = jwt.sign(payload, key)
        res.send(token)
        // res.send('passwords match')
      }else{
        res.json({error: 'Passwords do not match'})
      }
    }else{
      Student.findOne({student_id:req.body.login})
      .then(student=>{
        if(student){
          if(bcrypt.compareSync(req.body.password, `${student.password}`)){
            const payload = {
              _id : student._id,
              name:student.name,
              surname:student.surname,
              clas:student.clas,
              department:student.department,
              gender:student.gender,
              religion:student.religion,
              sog:student.sog,
              lga:student.lga,
              student_id:student.student_id,
              school_id:student.school_id,
              address:student.address,
              pname:student.pname,
              psurname:student.psurname,
              email:student.email,
              number:student.number,
              paddress:student.paddress,
              age:student.age
            }
            let token = jwt.sign(payload, key)
            res.send(token)
          }else{
            res.json({error: 'Passwords do not match'})
          }
        }else{
          res.json({error: "Student does not exist or hasn't been registered yet"})
        }
      })
      .catch(err=>{
        res.send('error' + err)
      })
    }
  })
  .catch(err=>{
    res.send('error' + err)
  })
})


router.get('/classbill/:clas',async(req,res)=>{
  await Bill.findOne({clas:req.params.clas})
  .then(bill=>res.json(bill))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/studentbill/:student_id',(req,res)=>{
  StudentBill.findOne({student_id:req.params.student_id})
  .then(bill=>res.json(bill))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/chat',async(req,res)=>{
  var date = new Date()
  var decode = jwt.verify(req.headers['authorization'], key)
  var newChat = new Chat({
    sender_id:req.body.sender_id,
    message:req.body.message,
    school_id:decode.school_id,
    date,
    name:req.body.name
  })
  try {
    const chat = await newChat.save();
    if (!chat) throw Error('Something went wrong when uploading the chat');

    res.status(200).json(chat);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
})
router.get('/chat', (req,res)=>{
  var decode = jwt.verify(req.headers['authorization'], key)
  Chat.find({school_id:decode.school_id})
  .sort({date:-1})
  .then(chat => res.json(chat))
  .catch(err => res.status(400).json('Error: ' + err))
})
router.post('/chatpage',async(req,res)=>{
  var date = new Date()
  var decode = jwt.verify(req.headers['authorization'], key)
  var newChat = new ChatPage({
    teacher_id:req.body.teacher_id,
    message:req.body.message,
    school_id:decode.school_id,
    date,
    name:req.body.name,
    student_id:req.body.student_id,
    clas:decode.clas
  })
  try {
    const chat = await newChat.save();
    if (!chat) throw Error('Something went wrong when uploading the chat');

    res.status(200).json(chat);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
})
router.get('/chatpage/:student_id', (req,res)=>{
  var decode = jwt.verify(req.headers['authorization'], key)
  ChatPage.find({school_id:decode.school_id,
    clas:decode.clas,
    student_id:req.params.student_id
  })
  .sort({date:-1})
  .then(chat => res.json(chat))
  .catch(err => res.status(400).json('Error: ' + err))
})
router.get('/receipt/:student_id',(req,res)=>{
  Receipt.find({student_id: req.params.student_id})
  .sort({date:-1})
    .then(receipt=>res.json(receipt))
    .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router;
