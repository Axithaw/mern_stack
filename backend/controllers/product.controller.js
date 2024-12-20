
// import Product from '../models/product.model.js';


// export const getProduct= async (req, res) => {
//     try{
//      const products = await Product.find({})
//      res.status(200).json({
//          success: true, 
//          data: products
//      })
//     }
//     catch(error){
//      console.log("error in fetching data" , error.message)
//      res.status(500).json({
//          success: false,
//          message: "Server Error"
//      })
//     }}

 
// export const postProducts =  async ( req, res) => {
//      const product = req.body;
     
//      if(!product.name || !product.price || !product.image ){
//          return res.status(400).json({success: false, message: "Please fill all required fields"})
//      }
//      const newProduct = new Product(product)
 
//      try {
//          await newProduct.save();
//          res.status(201).json({
//              success: true,
//              data: newProduct
//          })
//      }
//      catch(error) {
//          console.log("Error in Create Product", error.message)
//          res.status(500).json({success:false, message: "server Error"})
//      }
//  }
 
// export const putProduct= async (req, res) => {
//      const { id } = req.params;
 
//      const product = req.body;
     
     
     
//      try {
//         const newProduct = await Product.findByIdAndUpdate(id, product,{new:true})
//          res.status(200).json({
//              success: true,
//              data: newProduct
//          })
//      }
//      catch(error) {
//          res.status(500).json({
//              success: false,
//              message: "Server Error"
//          })
//      }
//  }
 
// export const deleteProduct = async (req, res) => {
//      const { id } = req.params;
 
//      try {
//          await Product.findByIdAndDelete(id);
//          res.status(200).json({
//              success: true,
//              message: "Deleted Successfully!"
//          })
//      } 
//      catch(error) {
//          res.status(404).json({
//              success: false,
//              message: "Item Not Found"
//          })
//      }
 
//  }


import Product from "../models/product.model.js"


export const getProduct = async (req, res) => {
    try{ 
        const products = await Product.find({})
        res.json(products)
    }
    catch(error){
        console.log("Error")
    } }


 export const postProduct = async (req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image ){
        return res.status(400).json({
            success: false,
            message: "fill all the field"
        })
    }
     const newProduct = new Product(product)

    try{ 
           await newProduct.save();
            res.status(200).json({
                success: true,
                data: newProduct
            })
        }
    catch(error){
        console.log("Error in Create Product", error.message)
        res.status(500).json({success:false, message: "server Error"})
        
        } }
    

export const putProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({
            success: true,
            data: updatedProduct
        })
    }
    catch(error) {
        console.log("Error in Create Product", error.message)
        res.status(500).json({success:false, message: "Object Not found"})
        
    }

}
    
export const deleteProduct = async (req, res ) => {
    const { id } = req.params;


    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Deleted Successfully"
        })

    }
    catch(error){
        console.log("Error in Create Product", error.message)
        res.status(500).json({success:false, message: "server Error"})
        
    }
}
    
    


