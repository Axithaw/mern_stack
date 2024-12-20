// import express from "express";

// import { deleteProduct, getProduct, postProducts, putProduct } from "../controllers/product.controller.js";


// const router = express.Router();
// router.get("/", getProduct )
//  router.post( "/", postProducts)
 
//  router.put("/:id", putProduct)
 
//  router.delete("/:id" , deleteProduct)
 
//  export default router;


import express from "express";
import {getProduct, postProduct, putProduct, deleteProduct} from "../controllers/product.controller.js"

const router = express.Router();




router.get("/", getProduct)
router.post("/", postProduct)
router.put("/:id", putProduct)
router.delete("/:id" , deleteProduct)

export default router