
import "dotenv/config";
import mongoose from "mongoose";

 
const { MONGO_URL } = process.env; 

export const connectDb = async () => {
  
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conexão com banco feita com sucesso! ✅😎");
    
  } catch (error) {
    console.log("Falha ao se conectar com o banco de dados! ❌😥", error);
    
  }
};


