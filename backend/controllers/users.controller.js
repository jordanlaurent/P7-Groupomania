const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/users.model.js");
// Cree et enregistrer un nouveaux compte
exports.signup = (req, res, next) => {
  let email       = req.body.email;
  let password    = req.body.password;
  let name        = req.body.name;
console.log(email);
console.log(name);
console.log(password);
  if (!email  ){
    return res.status(400).send({ error : "L'adresse mail doit etre correctement remplie"});
  }if (!password ){
    return res.status(400).send({ error : "Le mot de passe doit etre correctement remplie"});
  }if ( !name ){
    return res.status(400).send({ error : "Le nom doit etre correctement remplie"});
  }
  // verification que l'adresse mail ne soit pas deja utiliser
  User.findOneByEmail(email,(err,data) => {
    if (err){
      return res.status(500).json({ error : "erreur serveur"})
    } else if (data > 0){
      return res.status(409).json({ error : "L'adresse mail est deja attacher a un compte"})
    } else {
      bcrypt.hash(req.body.password, 10)
      .then(hashmotdepasse => {
        // crée un compte 
        const user = new User({
            email: email,
            password: hashmotdepasse,
            name: name,
          });
          User.signup(user, (err, data) => {
                if (err) {
                 return res.status(500).send({message: err.message || "Une erreur s'est produite lors de la création du client."});
                 } else {
                   return res.send(data); }
              });
            })
            .catch(error => res.status(500).json({ error: "Entrer un mots de passe valide" }));
            };
    })
  };






// fontcion connecter utilisateur
exports.login = (req,res ) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);
  User.login( email, (err, data) => {
  if (err ){
    return res.status(400).send({ error : "Cette adresse email n'existe pas"});
  } else {
    let password = req.body.password;
    bcrypt.compare(password, data[0].password)
    .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !'});
          }
          res.status(200).json({
            email: req.body.email,
            id: res.insertId,
            token: jwt.sign({ id: res.insertId},
              'RANDOM_TOKEN_SECRET', {expiresIn: '24h'}
              )
          });
  })
}
})
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
