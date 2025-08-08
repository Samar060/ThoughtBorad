import mongoose from "mongoose"


 export const connectDB= async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URI);
     
    console.log("MONGO_DB CONNECTED SUCESSFULLY");
    } catch (error) {
    console.log("Eroor while connecting to the database",error);
    process.exit(1) // 1 means exit with failure
   }
}