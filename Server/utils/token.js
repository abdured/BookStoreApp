const jwt = require('jsonwebtoken');

    const  generateJwt =(data,key)=>{
        return jwt.sign(data.toJSON(),key);
      }


     const varifyToken =(token)=>
      {
        try {
            return jwt.verify(token,process.env.KEY);
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return  res.status(401).json("Invalid Token");
            }
        }        
    } 
    exports.generateJwt =generateJwt;
    exports.varifyToken =varifyToken;
