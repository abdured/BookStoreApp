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
         console.log(req.params.id);
            const bookfound = await BookService.getBook(req.params.id)
            if(bookfound)
        {
            
            res.json(bookfound);

        }
        else{
            res.json({"success":false,"Message":"book not Found"});
        }
          
    }

    static async AddBook(req,res)
    { 
         await BookService.addBook(req.body)
         res.json({success:"seccesfully added "});
    
}



}



