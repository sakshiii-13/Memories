import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import postRoutes from "./Routes/posts.js";
import dotenv from "dotenv";

const app=express();

dotenv.config();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}));
app.use(cors());
app.use('/posts',postRoutes);
const CONNECTION_URL="mongodb+srv://thewitness0801:chloe080103mongo@memories.eu23hzw.mongodb.net/?retryWrites=true&w=majority";
const PORT=process.env.PORT||3001;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>console.log("server running"))).catch((error)=>console.log(error.message));
