const Post = require("../models/post.model.js");
const User = require("../models/users.model.js");
const Comment = require("../models/comment.model.js");
const jwt = require('jsonwebtoken');
const { post } = require("../routes/post.routes.js");
const tokenSecret = "RANDOM_TOKEN_SECRET";

exports.create = (req, res, next) => {
    let token = req.body.userid;
    let decodeToken = jwt.verify(token, tokenSecret);
    let userid = decodeToken.id;
    let comment = req.body.comment;
    let Postid = req.body.postid;
    // requete de l'id de l'utilisateur puis push dans this.id = post.idusers;
    // si le message est vide alors non envoyé
    if (comment == "") {
      return res.status(400).send({ error: "Le champs doit etre remplie" });
    } if (comment.length >= 250) {
      return res.status(400).send({ error: "Le champs doit etre inferieur a 250 character" });
    }
    const newComment = new Comment({
      idusers: userid,
      comment: comment,
      postid: Postid,
    });
    Comment.create(newComment, (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Veuillez saisir un message' });
      } else {
        return res.status(201).json({ "Post publié ! ": data });
      }
    })
  }

  exports.findAll = (req, res) => {
    Comment.findAll((err, data) => {
      if (err)res.status(500).send({message:err.message || "Some error occurred while retrieving post."});
      else res.send(data);
    });
  };



//Modifier un commentaire
  exports.modify = (req, res) => {
    let token = req.body.userid;
    console.log(token)
    let decodeToken = jwt.verify(token, tokenSecret);
    let idusers = decodeToken.id;
    let id = req.body.id;
    let message =req.body.message
    if (!message){
      res.status(400).send({ message: "Le champs message ne peut étre vide" });
    } 
    Post.modify(message,idusers,id,new Post(req.body),(err, data) => {
            if (err)
             res.status(500).send({message: err.message || "utilisateur non trouvé"});
             else  res.status(200).json(data)
             console.log(data)
            })
  };

  // suprimer un commentaire
exports.delete = (req, res) => {
  let token = req.body.userid;
  let decodeToken = jwt.verify(token, tokenSecret);
  let idusers = decodeToken.id;
  let id = req.body.id;
Comment.delete(idusers,id, (err, data) => {
    if (err)res.status(500).send({message:err.message || "Ce commentaire n'existe pas."});
    else res.send(data);
  });
};

  // Admin suprime un commentaire
  exports.Admindelete = (req, res) => {
    let id = req.body.id;
  Comment.Admindelete(id, (err, data) => {
      if (err)res.status(500).send({message:err.message || "Ce commentaire n'existe pas."});
      else res.send(data);
    });
  };