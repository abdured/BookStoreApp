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

    static async getBook(id){
        try {
            const book = await  Book.findOne({book_id:id});
           
            return book;
            
        } catch (error) {
            console.log(`Could not fetch book ${error}`)
        }
    }
    static async addBook(data){
        try {
             this.Book=new Book(data);
             await this.Book.save(this.Book);
        } catch (error) {
            console.log(`Could not save book ${error}`)
        }
    }




    static async updateBookComment(id,newComment)
    {
      

        try {
            const book = await  Book.findOneAndUpdate({book_id:id},{$push:{comment :newComment}});
          return book;
            
        } catch (error) {
            console.log(`Could not fetch book ${error}`)
        }
    }

    static async checkUserCommented(id,userId)
    {
      

        try {
            const book = await  Book.findOne({book_id:id ,comment: {"$in": [userId]}});
          return book;
            
        } catch (error) {
            console.log(`Could not fetch book ${error}`)
        }
    }

}