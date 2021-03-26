const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenSecret = "RANDOM_TOKEN_SECRET";
const fs = require("fs");
const User = require("../models/users.model.js");

// Cree et enregistrer un nouveaux compte
exports.signup = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let name = req.body.name;
  let prenom = req.body.prenom
  //let photo = JSON.parse(req.body.photo);
  let bio = req.body.bio;
  //console.log(photo)
  if (!email) {
    return res.status(400).send({ error: "L'adresse mail doit etre correctement remplie" });
  } if (!password) {
    return res.status(400).send({ error: "Le mot de passe doit etre correctement remplie" });
  } if (!name) {
    return res.status(400).send({ error: "Le nom doit etre correctement remplie" });
  } if (!prenom) {
    return res.status(400).send({ error: "Le prenom doit etre correctement remplie" });
  }if (!bio) {
    return res.status(400).send({ error: "La bio doit étre remplie" });
  }

  // verification que l'adresse mail ne soit pas deja utiliser
  User.findOneByEmail(email, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "erreur serveur" })
    } else if (data > 0) {
      return res.status(409).json({ error: "L'adresse mail est deja attacher a un compte" })
    } else {
      bcrypt.hash(req.body.password, 10)
        .then(hashmotdepasse => {
          // crée un compte 
          const user = new User({
            bio:bio,
            email: email,
            password: hashmotdepasse,
            name: name,
            prenom: prenom,
            //photo:`${req.protocol}://${req.get('host')}/images/${req.file.filename}` // a confirmer 
          });
          User.signup(user, (err, data) => {
            if (err) {
              return res.status(500).send({ message: err.message || "Une erreur s'est produite lors de la création du client." });
            } else {
              return res.send(data);
            }
          });
        })
        .catch(error => res.status(500).json({ error: "Entrer un mots de passe valide" }));
    };
  })
};






// fontcion connecter utilisateur
exports.login = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  User.login(email, (err, data) => {
    if (!email) {
      return res.status(400).send({ error: "Cette adresse email n'existe pas" });
    } else {
      let password = req.body.password;
      bcrypt.compare(password, data[0].password)
        .then(valid => {  
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            prenom: data[0].prenom,
            bio:data[0].bio,
            name: data[0].name,
            photo: data[0].photo,
            email: data[0].email,
            id: data[0].id,
            token: jwt.sign({ id: data[0].id },
              'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
            )
          });
        })
    }
  })
};













// Recuperer tout les compte de la base de donné
// exports.findAll = (req, res) => {
//   User.getAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Une erreur s'est produite lors de la récupération des comptes."
//       });
//     else res.status(200).json(data);
//   });
// };

 //telecharger photo de profil
exports.photo = (req,res, next) => {
  let token = req.body.userid;
  console.log(token)
  console.log(req.body)
  let decodeToken = jwt.verify(token, tokenSecret);
  let id = decodeToken.id;
  //const photo = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  console.log(req.body.data)
User.photo(photo,id,(err, data) => {
    if (err)
     res.status(500).send({message: err.message || "utilisateur non trouvé"});
     else  res.status(200).json(data)
     console.log(data)
    })
};

exports.test = (req,res, next) => {
  // let token = req.body.userid;
  // console.log(token)
  console.log(req.body)
  // let decodeToken = jwt.verify(token, tokenSecret);
  // let id = decodeToken.id;
  // const photo = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  // console.log(req.body.data)

};



// Mettre à jour un compte identifié par le usersId dans la demande
exports.update = (req, res) => {
  let token = req.body.userid;
  console.log(token)
  let decodeToken = jwt.verify(token, tokenSecret);
  let id = decodeToken.id;
  let email =req.body.email
  if (!email){
    res.status(400).send({ message: "Le champs email ne peut étre vide" });
  } 
  User.update(email,id,new User(req.body),(err, data) => {
          if (err)
           res.status(500).send({message: err.message || "utilisateur non trouvé"});
           else  res.status(200).json(data)
           console.log(data)
          })
};

// Supprimer un client avec le usersId spécifié dans la demande
exports.delete = (req, res, next) => {
  let token = req.body.userid;
  let decodeToken = jwt.verify(token, tokenSecret);
  let id = decodeToken.id;
  User.delete(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ce port n'existe pas."
      });
    else res.send(data);
  });
};
