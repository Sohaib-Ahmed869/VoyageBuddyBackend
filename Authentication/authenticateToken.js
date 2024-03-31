const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    try {
       
        const token = req.headers.authorization.split(' ')[1]; 
       
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        
        req.userData = {
            userId: decodedToken.userId,
            firstname: decodedToken.firstname,
            email: decodedToken.email,
        };

        next(); 
    } catch (error) {
        return res.status(401).json({
            message: 'Authentication failed',
        });
    }
};

module.exports = authenticateUser;