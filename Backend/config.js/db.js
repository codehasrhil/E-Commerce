import mongoose from "mongoose";

const connectDB  = async () => {
    try{

        await mongoose.connect(process.env.mongoUrl)
        console.log("_____Connected____")

    }catch(error){
        console.log(`error:${error.message}`)
    }
}

export default connectDB