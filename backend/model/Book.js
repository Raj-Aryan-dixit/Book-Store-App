import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  country: String,
  language: String,
  year:Number
});

const Book = mongoose.model("Book",bookSchema);

export default Book;