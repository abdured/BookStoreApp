const Book =require('../models/Book');



module.exports = class BookService
{  static async getAllBooks(){
        try {
            const allbooks = await  Book.find();
            return allbooks;
        } catch (error) {
            console.log(`Could not fetch books ${error}`)
        }
    }

    static async getBook(book_id){
        try {
            const book = await  Book.findOne({book_id});
            
            if(book)
              {
                return book;
              }
        } catch (error) {
            console.log(`Could not fetch book ${error}`)
        }
    }

}