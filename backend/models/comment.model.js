const sql = require("./db.js");

// constructor
const Comment = function(comment) {
  this.comment      = comment.comment,
  this.postid       = comment.postid,
  this.idusers      = comment.idusers
  this.datecomment  = comment.datecomment
};

Comment.create = (newComment, result) => {
    sql.query("INSERT INTO comment SET ?", newComment, (err,res)=>{
      if(err){
        console.log("error: ", err);
        result(err, null);
        return;
      } 
      console.log("created comment: ", { id: res.insertId, ...newComment });
      result(null, { id: res.insertId, ...newComment });
    });
  };

  Comment.findAll = (result) => {
    sql.query("SELECT comment,datecomment,postid,name,prenom,comment.id FROM comment INNER JOIN users ON comment.idusers = users.id ",(err, res) => {
      if (err) {
        result(err, null);
        return;
      } else {
        result(null, res);
        return;
      }
    });
  };
  
 Comment.delete = (idusers,id, result) => {
    sql.query(`DELETE FROM comment WHERE idusers = ?  AND id = ? `,idusers,id, (err, res) => {
      if (err) {
        result(err, null);
        return;
        } else {
        result(null, res);
        return;
        }
    });
  };
  module.exports = Comment;