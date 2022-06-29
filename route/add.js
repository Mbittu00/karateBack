import express from'express'
import Add from'../model/add.js'
let left=10
let app=express.Router()
//add user
app.post('/',async(req,res)=>{
  if (0<left) {
    try {
let data=await Add.findOne({name:req.body.name})
if (data) {
  res.status(500).send({msg:'you already registered'})
}else{
 let data=await Add.create(req.body)
left=left-1
res.status(201).send({left})
}
    } catch (e) {
res.status(500).send({msg:'somethig is worng'})
    }
  }else{
    res.status(410).send({msg:'10 Student already  registered'})
  }
})
//get users
app.get('/gote/all/user/for/chake',async(req,res)=>{
  try {
  let data=await Add.find({})
  res.status(200).send(data)
  } catch (e) {
    res.status(500).send({msg:'somethig is worng'})
  }
})
//left
app.get('/',async(req,res)=>{
try {
let data=await Add.find({})
res.send({left:10-data.length})
} catch (e) {} 
})
//add left
app.post('/add/left/user',(req,res)=>{
  let user=req.body.left
  left=user+left
  console.log(typeof user)
  res.send({left})
})
export default app