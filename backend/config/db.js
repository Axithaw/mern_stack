// import mongoose from "mongoose";


// export const connectDB = async ()=>{
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URI);
//         console.log(`MongoDB connected: ${conn.connection.host}`)
//     }
//     catch(error){
//         console.log(`Error: ${error.message}`)
//         process.exit(1);
//     }
// }

import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongooseDB connected at ${conn.connection.host}`)
    }
    catch(error){
        console.log( ` Error: ${error.message} `)
        process.exit(1);
    }
}