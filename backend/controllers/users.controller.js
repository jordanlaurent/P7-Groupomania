const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/users.model.js");

// Cree et enregistrer un nouveaux compte
exports.signup = (req, res) => {
  bcrypt.hash(req.body.password, 10)
   // Valider la demande
.then(hashmotdepasse => {
// crée un compte 
const user = new User({
    email: req.body.email,
    password: hashmotdepasse,
    name: req.body.name,
  });

  // Save compte dans la base de donné
  User.signup(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur s'est produite lors de la création du client."
      });
    else res.send(data);
  });
})
.catch(error => res.status(500).json({ error: "Entrer un mots de passe valide" }));
};

// fontcion connecter utilisateur
exports.login = (req,res ) => {
  User.login({ email:req.body.email})
  .then(user => {
    if (!user) {
      return res.status(401).json({error : 'utilisateur non trouvé !'});
    }
    bcrypt.compare(req.body.password, user.password)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !'});
      }
      res.status(200).json({
        userId: user._id,
        token: jwt.sign({ userId: user._id},
          'RANDOM_TOKEN_SECRET', {expiresIn: '24h'}
          )
      });
    })
    .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};













// Recuperer tout les compte de la base de donné
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Une erreur s'est produite lors de la récupération des comptes."
          });
        else res.send(data);
      });
    };

// Mettre à jour un compte identifié par le usersId dans la demande
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!"
    });
  }

  User.updateById(
    req.params.usersId,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Compte non trouvé avec l"identifiant ${req.params.usersId}.`
          });
        } else {
          res.status(500).send({
            message: "Erreur lors de la mise à jour du compte avec l'identifiant " + req.params.usersId
          });
        }
      } else res.send(data);
    }
  );
};

// Supprimer un client avec le usersId spécifié dans la demande
exports.delete = (req, res) => {
    User.remove(req.params.usersId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Compte non trouvé avec identifiant ${req.params.usersId}.`
            });
          } else {
            res.status(500).send({
              message: "Impossible de supprimer le compte avec l'identifiant " + req.params.usersId
            });
          }
        } else res.send({ message: `Compte supprimer avec succes!` });
      });
};
