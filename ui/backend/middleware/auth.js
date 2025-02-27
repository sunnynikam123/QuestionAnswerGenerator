const jwt = require('jsonwebtoken');
const User = require('../schema/users')
const authenticateUser = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const id_user = await User.findOne({_id:decoded})
        if(id_user){
            req.user = id_user;
            next();  
        }else{
            throw new Error("User not found");
        }
    } catch (error) {
        return res.status(400).send("Invalid token");
    }
};

module.exports = authenticateUser;
