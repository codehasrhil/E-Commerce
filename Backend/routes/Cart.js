import express from 'express'
import { AddToCart , removeFromCart , UpdateQuantity , getCartByuserId } from '../Controllers/CartController.js'

const router = express.Router();

// Add item to cart 
router.post('/add',AddToCart);

// Remove item to cart 
router.post('/remove',removeFromCart);


// Add item to cart 
router.post('/update',UpdateQuantity);


// Add item to cart 
router.get('/:userId',getCartByuserId);

export default router