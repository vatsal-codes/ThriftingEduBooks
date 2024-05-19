import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./route/user.router.js";
import bookRoute from "./route/book.router.js"
import bookRouter from "./route/book.router.js";


const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI=process.env.MONGODBURI;

//connect to mongoDB

    mongoose.connect(URI).then(() => {
        console.log("Connected to MongoDB");


})
.catch((error) => console.log(error));

    // app.get("/", (req,res) => {
    //     res.send("book");
    // });


//defining routes

app.use("/book",bookRouter);
app.use("/user",userRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});