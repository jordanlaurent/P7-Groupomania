const Post = require("../models/post.model.js");

// crée un post
exports.create = (req,res,next) =>{
    let message = req.body.message;
    // si le message est vide alors non envoyé
    if( message == "" ) {
        return res.status(400).send({ error : "Le champs doit etre remplie"});
      } if( message.length>=250) {
        return res.status(400).send({ error : "Le champs doit etre inferieur a 250 character"});
      } 
    const newPost = new Post({
      message : message,
    });
    Post.create(newPost, (err,data)=>{
      if(err){
        return res.status(500).json({ error : 'Veuillez saisir un message'});
      } else {
        return res.status(201).json({"Post publié ! " : data});
      }
    })
  }
// recuperer tout les post
  exports.findAll = (req, res) => {
    Post.findAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving post."
        });
      else res.send(data);
    });
  };