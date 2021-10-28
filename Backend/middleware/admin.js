const jwt = require("jsonwebtoken");
// const config = require("config");

module.exports = function (req, res, next) {
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("Access Denied. No token Provided..");

    try {
        const decoded = jwt.verify(token, "jwtPrivateKey");
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send("Invalid Token");
    }
}  


// module.exports = function (req, res, next) {
//     if(!req.user.isAdmin) return res.status(403).send("Access Denied...");

//     next();
// }   

