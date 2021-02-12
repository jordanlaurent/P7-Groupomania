const jwt = require('jsonwebtoken');
const tokenSecret = "RANDOM_TOKEN_SECRET";

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodeToken = jwt.verify(token, tokenSecret);
        const id = decodeToken.id;

        if (req.body.id && req.body.id !== id){
            throw "invalid user ID";
        }
        else {
            next();
        }
    }
    catch {
        res.status(401).json({ error: error || "Requete non authentifiée"});
    }
}