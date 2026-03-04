import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import materialRoutes from "./routes/materialRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.port || 3001

app.use(cors(
    {
        origin: `http://localhost:5173`
    }
))
app.use(express.json()); 
app.use("/Material", materialRoutes);

connectDB().then(()=>{
  app.listen(port,()=> {
    console.log(`http://localhost:${port}/Material`)
  })
})
