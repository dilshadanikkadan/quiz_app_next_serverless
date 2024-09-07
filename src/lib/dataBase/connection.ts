import mongoose from "mongoose";
const connection ={
    isConnected:0
}
export const dbConnect = async () => {
  
  try {
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO!,{
      
    });
    console.log(`🍃 Database Established connection with MongoDB`);
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    console.error(`❌ Database Connection failed`);
    console.error(error.message);
    process.exit(1);
  }
};