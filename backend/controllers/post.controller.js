const Post = require("../models/post.model.js");
const fs = require("fs");
const User = require("../models/users.model.js");
const jwt = require('jsonwebtoken');
const { post } = require("../routes/post.routes.js");
const { fstat } = require("fs");
// crée un post
exports.create = (req, res, next) => {
  console.log(req.body.userid)
  let token = req.body.userid;
  let decodeToken = jwt.verify(token, process.env.token);
  let userid = decodeToken.id;
  let message = req.body.message;
    if (message.length >= 450) {
    return res.status(400).send({ error: "Le champs doit etre inferieur a 450 character" });
  } if (!req.file) {
    const newPost = new Post({
      idusers: userid,
      message: message,
    }); 
    Post.create(newPost, (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Veuillez saisir un message' });
      } else {
        return res.status(201).json({ "Post publié ! ": data });
      }
    })
  } else {
    const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
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

// modifier un post
exports.modify = (req, res) => {
  let token = req.body.userid;
  let decodeToken = jwt.verify(token, process.env.token);
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


// suprimer un post
exports.delete = (req, res) => {
  let token = req.body.userid;
  let decodeToken = jwt.verify(token, process.env.token);
  let idusers = decodeToken.id;
  let id = req.body.id;
    Post.findOne(id,idusers, (err,data)=> {
      if(data[0].image){
      const imageUrl = data[0].image.replace("http://localhost:3000/","");
      console.log(imageUrl)
      fs.unlink(imageUrl, () => {
       Post.delete(id,idusers, (err, data) => {
         if (err)res.status(500).send({message:err.message || "Ce post n'existe pas."});
        else res.send(data);
        })
      }) 
    } else {
      Post.delete(id,idusers, (err, data) => {
        if (err)res.status(500).send({message:err.message || "Ce post n'existe pas."});
       else res.send(data);
       })
    }
    })
  
},
// admin supprimer post
exports.Admindelete = (req, res) => {
  let id = req.body.id;
  Post.Admindelete(id, (err, data) => {
    if (err)res.status(500).send({message:err.message || "Ce post n'existe pas."});
    else res.send(data);
  });
};
