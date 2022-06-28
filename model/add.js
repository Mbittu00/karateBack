import mongoose from'mongoose'

let PreAdd=mongoose.Schema({
  name:{
    type:String,
    required:true
  },phone:{
    type:Number,
    required:true
  },age:{
    type:Number,
    required:true,
    maxLength:2,
    minLength:1
  },style:{
    type:String,
    required:true,
    enum:['Karate','selfDefence','Boxing','Kickboxing']
  }
},{
  timestamps:true
})
let model=mongoose.model('preAdd',PreAdd)
export default model