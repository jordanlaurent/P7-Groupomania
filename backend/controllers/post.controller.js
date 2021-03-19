const Post = require("../models/post.model.js");
const User = require("../models/users.model.js");
const jwt = require('jsonwebtoken');
const { post } = require("../routes/post.routes.js");
const tokenSecret = "RANDOM_TOKEN_SECRET";
// crée un post
exports.create = (req, res, next) => {
  let token = req.body.userid;
  let decodeToken = jwt.verify(token, tokenSecret);
  let userid = decodeToken.id;
  console.log(userid);
  let message = req.body.message;
  let image = req.body.image;
  // requete de l'id de l'utilisateur puis push dans this.id = post.idusers;
  // si le message est vide alors non envoyé
  if (message == "") {
    return res.status(400).send({ error: "Le champs doit etre remplie" });
  } if (message.length >= 250) {
    return res.status(400).send({ error: "Le champs doit etre inferieur a 250 character" });
  }
  const newPost = new Post({
    idusers: userid,
    message: message,
    image: image,
  });
  Post.create(newPost, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Veuillez saisir un message' });
    } else {
      return res.status(201).json({ "Post publié ! ": data });
    }
  })
}
// recuperer tout les post
exports.findAll = (req, res) => {
  Post.findAll((err, data) => {
    if (err)res.status(500).send({message:err.message || "Some error occurred while retrieving post."});
    else res.send(data);
    
  });
};

//  Rechercher un poste dans la bdd
exports.search = (req, res) => {
  let message = req.query.search
  console.log(message);
  Post.search(message, (err, data) => {
    if (err) res.status(500).send({message:err.message || "Some error occurred while retrieving post."});
    else res.send(data);
  });
};

// suprimer un post
exports.delete = (req, res) => {
  let token = req.body.userid;
  let decodeToken = jwt.verify(token, tokenSecret);
  let idusers = decodeToken.id;
  console.log(idusers)
  let id = req.body.id;
  console.log(id)
  Post.delete(id,idusers, (err, data) => {
    if (err)res.status(500).send({message:err.message || "Ce port n'existe pas."});
    else res.send(data);
  });
};