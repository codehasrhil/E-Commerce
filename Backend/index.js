import express from  'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config.js/db.js'
import router from './routes/authroutes.js'
import ProductsRoutes from './routes/ProductsRoutes.js'
import CartsRoutes from './routes/Cart.js'

const app = express()

const port = process.env.port || 3400

dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/api/auth',router)
app.use('/api/products',ProductsRoutes)
app.use("/cart",CartsRoutes)


app.get('/',(req,resp)=>{
    resp.send("Home Page")
})

connectDB();

app.listen(port,()=>{
    console.log("This is Port:",port)
})