import express from 'express'

import { getProdcuts,deleteProduct,updateProduct,creatProduct } from '../Controllers/ProductController.js'


const router = express.Router();

//Route to creat a new product
router.post("/add",creatProduct)

//route to get all products
router.get('/',getProdcuts)


//route to update products

router.put("/update/:id",updateProduct)

//route to delete products 

router.delete('/delete/:id',deleteProduct)

export default router