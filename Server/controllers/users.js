const UserService =require('../services/user');
const Token = require('../utils/token');
require("dotenv").config();

module.exports = class Users{
    static async getAllUsers(req,res,next){ 
 try {
            const users = await  UserService.getAllUsers()
            if(!users){
               res.status(404).json({"success":false,"Message":"There are no users!"} )
            }
            res.json({"success":true,"data":users});
          } catch (error) {
             res.status(500).json({error: error})
          }
    }
    
    
    static async signup(req,res,next)
    { 
        const userFound = await UserService.checkUserUsername(req.body.username)
        if(userFound)
        {
            res.json({"success":false,"Message":"User Email Exists already!"});
        }else{
const user = await  UserService.addUser(req.body);
            if(!user){
               res.status(404).json({"success":false,"Message":"User Cannot be saved!"} )
            }
            res.json({"success":true,"Message":"Regstration Completed Successfully"});
          
        }
           
    }
    
    
    static async login(req,res)
    { 
   
            const{username,password} = req.body;

         
            const userFound = await  UserService.getUser(username,password);
            if(userFound)
        {
            const returntoken =Token.generateJwt(userFound,process.env.KEY);
            res.json({"success":true,"data":returntoken});

        }
        else{
            res.json({"success":false,"Message":"User not Found"});
        }
          
    }
}







