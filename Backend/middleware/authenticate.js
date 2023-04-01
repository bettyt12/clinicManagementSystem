// Middleware to authenticate and authorize the routes
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'error happened' });
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer!== 'Bearer' || !token) {
        return res.status(401).json({ message: 'Invalid Authorization ' });
    }

    // Verify the JSON Web Token
    try {
        const decoded = jwt.verify(token,process.env.SECRET_ACCESS_TOKEN);
        req.user = decoded;
        next();
    } catch (err) { 
        return res.status(401).json({ message: 'Invalid token' });
    }
};
module.exports=authenticate 