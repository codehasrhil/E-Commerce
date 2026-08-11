import express from  'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config.js/db.js'

const app = express()

const port = process.env.port || 3400

dotenv.config()
app.use(cors())
app.use(express.json())


app.get('/',(req,resp)=>{
    resp.send("Home Page")
})

connectDB();

app.listen(port,()=>{
    console.log("This is Port:",port)
})