// Middleware to authorize the routes multiple role

const authorize = (roles = []) => {
    return (req, res, next) => {
       
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            next();
    }
}
 
module.exports=authorize


//single role athorization
// const authorize = role => (req, res, next) => {
//   if (req.user.role !== role) {
//     return res.status(401).json({ message: 'Unauthorized access' });
//   }
  
//   next();
// };
// module.exports=authorize

 