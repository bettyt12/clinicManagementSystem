const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {

      const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decoded) => {
      if (err) {
          res.status (401).json({ success: false, message: 'Unauthorized' });
      } else {
        req.user = decoded;
        next();
      }
    });
    } else {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    }

   

module.exports=authenticate 
