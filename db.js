import mongoose from'mongoose'

export default function mongodb(){
  mongoose.connect('mongodb+srv://mbittu000:bittuc41@karatepreaddmision.u1kk3.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('connected')
  })
}