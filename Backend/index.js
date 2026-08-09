import express from  'express'
import dotenv from 'dotenv'

const app = express()

const port = 3400

dotenv.config()


app.get('/',(req,resp)=>{
    resp.send("Home Page")
})

app.listen(port,()=>{
    console.log("This is Port:",port)
})