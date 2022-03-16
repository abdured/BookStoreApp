const Book =require('../models/Book');

<<<<<<< HEAD
=======


>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
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
<<<<<<< HEAD
            const book = await  Book.findOne({_id:id});
            
            if(book)
              {
                return book;
              }
=======
            const book = await  Book.findOne({book_id:id});
           
            return book;
            
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96
        } catch (error) {
            console.log(`Could not fetch book ${error}`)
        }
    }
<<<<<<< HEAD
    static async addBook(data){
        try {
             this.Book=new Book(data);
             await this.Book.save(this.Book);
        } catch (error) {
            console.log(`Could not save book ${error}`)
        }
    }


=======


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
>>>>>>> 1eec277fd99947e8804f216a71463d7c95a0fe96

}