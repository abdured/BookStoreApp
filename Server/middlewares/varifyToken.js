const Token = require('../utils/token');

module.exports= (req,res,next)=>{
    const authHeader = req.headers.authorization;
  
    if (!authHeader)
    {
        return res.status(401).json("No Auth Token");
    } 
    const token = authHeader.split(' ')[1];

        try {
            Token.varifyToken(token)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return  res.status(401).json("Invalid Token");
            }
        }
        next();
      
    }