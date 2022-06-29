import express from'express'
import cors from'cors'
import Add from'./route/add.js'
import Mongodb from'./db.js'
//app config
let port=process.env.PORT || 8080
let app=express()
Mongodb()
//middleware
app.use(express.json())
app.use(cors())
//routes
app.use('/',Add)
//app listen
app.listen(port,()=>{
  console.log(port)
})