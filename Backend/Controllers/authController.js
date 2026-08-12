import user from "../models/user.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';


//SignUp User
export const signupUser = async(req,resp) => {
   try {

    const {name,email,password}  = req.body;

    //check user exit our not
    const userExists = await user.findOne({email});
    if(userExists){
        return resp.status(400).json({message:"user alredy exists"})
    }

    // Hash password
    const haspasword =  await bcrypt.hash(password,10);

    // creat user
    await user.create({
        name,
        email,
        password:haspasword
    })
    resp.json({message:"User registerd successfully"})
   } catch (error) {
     resp.status(500).json({mesaage:"server error", error})
   }
}


//Login User

export const loginUser = async(req,resp)  => {
    try{
       const {email,password}  = req.body;

       const userexite = await user.findOne({email});
       if(!userexite){
        return resp.status(400).json({message:'User not found'})
       }


       // Compare password
       const matchpassword = await bcrypt.compare(password,userexite.password);
       if(!matchpassword){
        return resp.status(400).json({message:"Invalid Password"})
       }

       //genrate jwt token
       const token = jwt.sign(
        {id:userexite._id},
        process.env.JWT_SECRET,
        {expiresIn:'7d'}
       );
       resp.json({
        message:"Login successful",
        token,
        userexite:{
            id: userexite._id,
            name: userexite.name,
            email: userexite.email
        }
    })
    }catch(error){
        resp.status(500).json({message:"Server error",error});
    }
}