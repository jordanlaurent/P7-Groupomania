const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    console.log(req.body.password);
    if (!passwordSchema.validate(req.body.password)) {
        res.writeHead(400, '{"message":"Mots de passe incorrect , veuillez entre 8 character dont 1 majuscule et 2 chiffre"}', {
            'content-type': 'application/json'
        });
        res.end( 'Mot de passe incorrect,veuillez entre 8 character dont 1 majuscule et 2 chiffre');
    } else {
        next();
    }
};