import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/Book_route.js";
import cors from "cors"
const app = express();
app.use(cors())
dotenv.config();


const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_DB_URI;
// connection to MONGO DB
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Mongo Connected Successfully");
    
} catch (error) {
    console.log("Error Occured:",error);
    
}

//routes
app.use("/book",bookRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
