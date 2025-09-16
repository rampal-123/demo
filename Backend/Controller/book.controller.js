import Book from "../module/book.module.js";

export const getBook=async(req,res)=>{
    try{
       const book=await Book.find()
       res.status(200).json(book)
    }
    catch(error)
    {
       console.log("error getting");
    }
}