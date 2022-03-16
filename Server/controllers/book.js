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
            const bookfound = await BookService.getBook(req.params.id)
            if(bookfound)
        {
            // const {file} =bookfound;
             // bookfound.file = 'http://localhost:3000/public/uploads/'+ file;
            // console.log(bookfound.file)
            // res.json({"success":true,"data":bookfound});
            res.json({"success":true,"data":bookfound});

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

static async findAndUpdateBook(req,res)
{ 
     await BookService.findAndUpdateBook(req.params.id,req.body)
     res.json({success:"seccesfully Updated "});

}

static async deleteBook(req,res)
{ 
     await BookService.deleteBook(req.params.id)
     res.json({success:"seccesfully deleted "});

}



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
            console.log(req.body)
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
}



