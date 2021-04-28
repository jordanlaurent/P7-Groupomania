const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    console.log(req.body.password);
    if (!passwordSchema.validate(req.body.password)) {
        return res.status(400).json({ error: "Le mots de passe doit contenir aux moins 8 character dont 2 chiffre et une majuscule" }), {
            'content-type': 'application/json'
        };
    } else {
        next();
    }
};