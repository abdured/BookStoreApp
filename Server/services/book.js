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
            const book = await  Book.findOne({_id:id});
            
            if(book)
              {
                return book;
              }
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



}