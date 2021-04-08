const sql = require("./db.js");

// constructeur
const Post = function(post) {
  this.message = post.message;
  this.id = post.id;
  this.Datemessage = post.Datemessage
  this.idusers = post.idusers
  this.image = post.image
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

//CHERCHER UN POSTS
Post.search = (message,result) => {
  sql.query("SELECT * FROM post INNER JOIN users ON post.idusers = users.id WHERE message LIKE CONCAT('%',?,'%') ORDER BY datemessage DESC",message,(err, res) => {
    if (err) {
      result(err, null);
      return;
    } else {
      result(null, res);
      return;
    }
  });
};

//TROUVER TOUS LES POSTS
Post.findAll = (result) => {
  sql.query("SELECT message , datemessage, image,name,photo,prenom,post.id,idusers FROM post INNER JOIN users ON post.idusers = users.id ORDER BY datemessage DESC",(err, res) => {
    if (err) {
      result(err, null);
      return;
    } else {
      result(null, res);
      return;
    }
  });
};

//MODIFIER UN POST
Post.modify = (message,id,idusers) => {
  console.log(message,id,idusers)
  return new Promise((result) => {
    sql.query(`UPDATE post SET message = ? WHERE id = ? AND idusers = ? `, [message,idusers,id],(err, res) => {
      if (err) { 
        result( err);
        return;
        } else {
       result(res);
       return;
        }
    });
  },
  )};

//SUPPRIME UN POST
Post.delete = (id,idusers, result) => {
  console.log(id,idusers,)
  sql.query("DELETE post, comment FROM post LEFT JOIN comment ON comment.postid = post.id WHERE post.id = ? AND post.idusers = ? ", [id,idusers], (err, res) => {
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