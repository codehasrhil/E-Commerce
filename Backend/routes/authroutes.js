import express from 'express'
import { signupUser , loginUser } from '../Controllers/authController.js'

 const router = express.Router();

 router.post('/signUp',signupUser)
  router.post('/login',loginUser)

 export default router