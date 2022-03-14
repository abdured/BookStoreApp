const User =require('../models/user');
const bcrypt = require('bcrypt');


module.exports = class UserService
{  static async getAllUsers(){
        try {
            const allusers = await  User.find();
            return allusers;
        } catch (error) {
            console.log(`Could not fetch users ${error}`)
        }
    }

    static async getUser(username,password){
        try {
            const user = await  User.findOne({username});
            const {password:passwordFromDb}= user; 
            const correctPassword = await bcrypt.compare(password,passwordFromDb);
            
            if(correctPassword)
              {
                return user;
              }
        } catch (error) {
            console.log(`Could not fetch user ${error}`)
        }
    }

    static async addUser(user){
        try {
           
            let encryptedPassword = await bcrypt.hash(user.password,10);
            const newUser = {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                username: user.username,
                password:encryptedPassword,
                role:user.role

            }
           const response = await new User(newUser).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }


    static async updateUser(email,userbody){
        try {
            const updateResponse =  await User.updateOne({email:email},userbody);

                return updateResponse;
        } catch (error) {
            console.log(`Could not update user ${error}` );

    }
       }

     static async deleteUser(userId){
        try {
            const deletedRes = await User.findOneAndDelete(userId);
            return deletedRes;
        } catch (error) {
            console.log(`Could  ot delete user ${error}`);
        }

    }


    static async checkUserUsername(username){
        try {
            const usernameFound = await User.findOne({username});
          return usernameFound;
        } catch (error) {
            console.log(`Could not do this User operation  ${error}`)
        }
    }

}