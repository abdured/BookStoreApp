const BookService =require('../services/book');
require("dotenv").config();

module.exports = class book{
    static async getAllbooks(req,res,next){ 
 try {
            const books = await  BookService.getAllBooks()
            if(!books){
               res.status(404).json({"success":false,"Message":"There are no books!"} )
            }
            res.json({"success":true,"data":books});
          } catch (error) {
             res.status(500).json({error: error})
          }
    }
    
    
    
    
    static async getSingleBook(req,res)
    { 
   

         
            const bookfound = await BookService.getBook(req.params.bookId)
            if(bookfound)
        {
            
            res.json({"success":true,"data":bookfound});

        }
        else{
            res.json({"success":false,"Message":"book not Found"});
        }
          
    }
}







