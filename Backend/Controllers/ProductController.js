import Product from "../models/Product.js";

export const creatProduct = async (req,resp)=>{
    try {
        const product = await Product.create(req.body);
        resp.json({
            message:"Product creat succesfully",
            product
        })
    } catch (error) {
        resp.status(500).json({message:'Server Error',error})
    }
};

// get all products

export const getProdcuts = async (req,resp) => {
    try {

        const {search,category} = req.query;
        let filter = {};
        if(search){
            filter.title = {$regex:search,$options: 'i'}; //Case-insensitve
        }

        if(category){
            filter.category =category
        }
        const products = await Product.find(filter).sort({createdAt:-1});
        resp.json(products)
    } catch (error) {
        resp.status(500).json({message:"server Error",error})
    }
}

// update a product

export const updateProduct =  async (req,resp) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        resp.json({
            message:"Product updated successfully",
            updated
        })
    } catch (error) {
         resp.status(500).json({message:"server Error",error})
    }
}

//delete product

export const deleteProduct = async (req,resp) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        resp.json({message:"Product deleted successfully"})
    } catch (error) {
        resp.status(500).json({message:"server Error",error})
    }
}