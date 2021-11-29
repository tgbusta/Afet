const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET="ba89352bd55da3fb4d7b82ccb634806d40262ea2bdc349d9744646af9711f3973b10d";
module.exports = function (req, res, next) {

    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Access Denied");
    try {
        const verified = jwt.verify(token, ACCESS_TOKEN_SECRET);
        next();
    } catch (error) {
        req.status(400).send("Invalid Token");
    }

};