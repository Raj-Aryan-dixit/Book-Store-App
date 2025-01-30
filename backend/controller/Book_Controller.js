import Book from "../model/Book.js";

export const getBooks =async (req,res) =>{
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error:",error);
        res.status(500).json(error);
    }
};

