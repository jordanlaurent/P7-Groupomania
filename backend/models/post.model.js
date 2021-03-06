const sql = require("./db.js");

// constructeur
const Post = function(post) {
  this.message = post.message;
  this.id = post.id;
  this.Datemessage = post.Datemessage
  this.idusers = post.idusers
};

//TROUVER TOUS LES POSTS
Post.findAll = (message,datemessage,image,idusers,result) => {
  sql.query("SELECT message , datemessage, image,idusers FROM post ORDER BY datemessage DESC",message,datemessage,image,idusers,(err, res) => {
    if (err) {
      result(err, null);
      return;
    } else {
      result(null, res);
      return;
    }
  });
};

//CHERCHER UN POSTS
Post.search = (message,result) => {
  sql.query("SELECT * FROM post WHERE message LIKE CONCAT('%',?,'%') ",message,(err, res) => {
    if (err) {
      result(err, null);
      return;
    } else {
      result(null, res);
      return;
    }
  });
};

//AJOUTER UN POST DANS la base de données
Post.create = (newPost, result) => {
  sql.query("INSERT INTO post SET ?", newPost, (err,res)=>{
    if(err){
      console.log("error: ", err);
      result(err, null);
      return;
    } 
    console.log("created post: ", { id: res.insertId, ...newPost });
    result(null, { id: res.insertId, ...newPost });
  });
};

//MODIFIER UN POST
Post.modify = ([message], result) => {
  sql.query(`UPDATE post SET message = '${message}'`, (err, res)=>{
    if(err){
      result(err, null);
      return;
    } else {
      result(null,res);
      return;
    }
  })
}

//SUPPRIME UN POST
Post.delete = (id, result) => {
  sql.query("DELETE FROM post WHERE id = ?",id, (err, res) => {
    if (err) {
      result(err, null);
      return;
      } else {
      result(null, res);
      return;
      }
  });
};

module.exports = Post;