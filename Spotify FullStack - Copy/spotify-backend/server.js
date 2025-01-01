import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import configCloudinary from "./src/config/configCloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";
// import authRouter from "./src/routes/authRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
configCloudinary();


//midellewares
app.use(express.json());
app.use(cors());

//initializing routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter)
// app.use("/api/auth", authRouter)

app.get("/", (req, res) => res.send("API Working"));

app.listen(port, () => console.log(`Server started on ${port}`));
