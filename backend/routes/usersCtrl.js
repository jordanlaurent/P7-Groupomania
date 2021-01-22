var bcrypt = require('bcrypt');
const { resolveSoa } = require('dns');
var jwtUtils = require('../utils/jwt.utils');
var models = require('../models');

module.exports = {
    register: function(req, res){

        // parametre
      var email = req.body.email;
      var username = req.body.username;
      var password = req.body.password;
      var bio = req.body.bio;

      if (email == null || username == null || password == null){
          return res.status(400).json({'error': 'parametre perdue'});
      }

      // check la taille du pseudo , regex du mail , mdp ... 
      models.User.findOne({
          attributes: ['email'],
          where: {email: email}
      })
      .then(function(userFound){
       if (!userFound){

        bcrypt.hash(password, 5, function(err, bcryptedPassword){
        var newUser = models.User.create({
            email: email,
            username: username,
            password: bcryptedPassword,
            bio: bio,
            isAdmin: 0
        }) 
        .then(function(newUser) {
            return res.status(201).json({
                'userId': newUser.id
            })
        })
        .catch(function(err){
            return res.status(500).json({'error': 'utilisateur non ajouté'});
        });
        });

       }else {
           return res.status(409).json({ 'error': 'Utilisateur deja crée'});
        }
        })
        .catch(function(err){
        return res.status(500).json ({'error': "impossible de verifier l'utilisateur"});
      });
    },
    login: function(req, res){

        // recuperer parametre pour ce connecter
        var email = req.body.email;
        var password = req.body.password;
        // on verifie si les donné entrer sont corret
        if (email == null || password == null ){
            return res.status(400).json({'error': 'paramettre perdue'})
        }
        // on verifie si un utilisateur existe dans la base de donné avec l'adresse mail
        models.User.findOne({
            where: { email: email}
        })
        .then(function(userFound) {
        if (userFound){
            // on compare le mots de passe entrer en claire avec celui salé et stocker dans la base de donné
         bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt){
             // resultat positif on retroune l'utilisateur avec le token
             if (resBycrypt){
                 return res.status(200).json({
                     'userId': userFound.id,
                     'token': jwtUtils.generateTokenForUser(userFound)
                 });
             } else {
                 return res.status(403).json({"error": "mots de passe non valide"});
             }
         });
        } else {
            return resolveSoa.status(404).json({'error': 'l"utilisateur n"existe pas dans la base de donnée'})
        }
        })
        .catch(function(err){
            return res.status(500).json({'error': "impossible de verifier l'utilisateur"});
        });
    }
}