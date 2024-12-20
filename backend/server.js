// import express from 'express';
// import dotenv from 'dotenv';
// import {connectDB} from './config/db.js'
// import router from "./router/product.router.js"

// dotenv.config();
// const app = express();

// app.use(express.json())
// const PORT = 5000

// app.use("/api/products/", router)

// app.listen(PORT , () => {
//    connectDB();
//     console.log(`server started at http://localhost:${PORT}`)
// })



import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import ProductRouter from "./router/product.router.js"


dotenv.config()
const app = express();

const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

app.use("/api/products", ProductRouter)
app.listen(PORT , ()=> {
    connectDB();
    console.log(`server started at http://localhost:${PORT}`)
})