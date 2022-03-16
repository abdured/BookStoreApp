const BookService =require('../services/book');
require("dotenv").config();

module.exports = class book{
    static async getAllbooks(req,res,next){ 
 try {
            const books = await  BookService.getAllBooks()
            if(!books){
               res.status(404).json({"success":false,"Message":"There are no books!"} )
            }
<<<<<<< HEAD
            res.json({"success":true,"data":books});
=======
            res.json(books);
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
          } catch (error) {
             res.status(500).json({error: error})
          }
    }
    
    
    
    
    static async getSingleBook(req,res)
    { 
<<<<<<< HEAD
         console.log(req.params.id);
=======
   
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
            const bookfound = await BookService.getBook(req.params.id)
            if(bookfound)
        {
            
<<<<<<< HEAD
            res.json(bookfound);
=======
            res.json({"success":true,"data":bookfound});
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96

        }
        else{
            res.json({"success":false,"Message":"book not Found"});
        }
          
    }

<<<<<<< HEAD
    static async AddBook(req,res)
    { 
         await BookService.addBook(req.body)
         res.json({success:"seccesfully added "});
    
}



=======
    static async getBookComment(req,res)
    {
        const bookfound = await BookService.getBook(req.params.id)
        if(bookfound)
        {
            const {comment} = bookfound;
            res.json({"success":true,"data":comment});

        }
        else{
            res.json({"success":false,"Message":"book not Found"});
        }

    }
    static async addBookComment(req,res)
    {
        const bookfound = await BookService.getBook(req.params.id)
        if(bookfound)
        {
           BookService.updateBookComment(req.params.id,req.body)
      
           res.json({"success":true,"Message":"Comment added successfull"});

        }
        else{
            res.json({"success":false,"Message":"Comment Can not be added"});
        }
    }

    static async isCommented(req,res)
    {
        const bookfound = await BookService.checkUserCommented(req.params.id,req.params.uid)
        if(bookfound)
        {
           res.json({"success":true ,"Message":"Commented before"});

        }
        else{
            res.json({"success":false,"Message":" not Commented"});
        }
    }
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
}



<<<<<<< HEAD
=======




>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
