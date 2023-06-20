import express from "express"
import { config } from "dotenv"
import cookieParser from "cookie-parser"

  config({
      path: "./data/config.env",
    })
    
  export const app = express()
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      origin: [process.env.FRONTEND_URI_1, process.env.FRONTEND_URI_2],
    })
  );

  app.get("/", (req, res, next) => {
    res.send("Working");
  })




app.get("/", (req, res, next)=>{
    res.send("RINA")
})
import user from "./routes/user.js"
app.use("/api/v1/user", user)