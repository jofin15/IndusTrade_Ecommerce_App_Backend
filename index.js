import express from "express"
import { mongoose } from "mongoose"
import productRouter from "./routes/productRouter.js"
import brandRouter from "./routes/brandRouter.js"
import categoryRouter from "./routes/categoryRouter.js"

import cors from "cors"
import bodyParser from "body-parser"

const server=express()
const PORT=8081


//middlewares
server.use(express.json()) //to parse req.body
server.use(bodyParser.json())
server.use(cors({
    exposedHeaders:["X-TOTAL-COUNT"]
}))

//db connecttion
main().catch(err=>console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
    console.log("database connected")
}

//routes
server.use("/products",productRouter)
server.use("/categories",categoryRouter)
server.use("/brands",brandRouter)





server.listen(PORT,()=>{
    console.log(`my server is running at ${PORT}`);
})