const sql = require("./db.js");

// constructeur
const Users = function(users) {
  this.email = users.email;
  this.name = users.name;
  this.prenom = users.prenom;
  this.password = users.password;
  this.photo = users.photo;
  this.active = users.active;
  this.id = users.id;
  this.bio = users.bio;
};
// creation d'un nouvelle utilisateur 
Users.signup = (newUsers, result) => {
  sql.query("INSERT INTO users SET ?", newUsers, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created users: ", { id: res.insertId, ...newUsers });
    result(null, { id: res.insertId, ...newUsers });
  });
};
// recherche si l'utilisateur est présent dans la base de donné
Users.findOneByEmail = (email, result) => {
  sql.query("SELECT * FROM users WHERE email = ? " , email, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
      } else if (res.length === 0) {
      result(null, res.length);
      return;
    } else if (res.length > 0){
      result(null, res.length);
      return;
    }
  });
};

Users.findOne = (id,result) => {
  console.log(id)
  sql.query("SELECT * FROM users WHERE id = ?",id,(err, res) => {
    if (err) {
      result(err, null);
      return;
    } else {
      result(null, res);
      return;
    }
  });
};
Users.login = (email,password, result ) => {
  sql.query("SELECT * FROM users WHERE email = ? ", email,password, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found users: ", res[0]);
      result(null, res[0]);
      return;
    }
  
    // not found users with the id
    result({ kind: "not_found" }, null);
  });
};


// modifier un utilisateur avec son id
Users.update = (email,id) => {
  return new Promise((result) => {
    sql.query(`UPDATE users SET email = ? WHERE id = ?`,[email,id], (err, res) => {
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
// Telecharger photo de profil 
  Users.photo = (photo,id, result) => {
    return new Promise((result) => {
      sql.query(`UPDATE users SET photo = ?  WHERE id = ?`,[photo,id], (err, res) => {
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
// Suprimer un utilisateur avec son id
Users.delete = (id, result) => {
  sql.query("DELETE FROM users WHERE id = ? ",id, (err, res) => {
    if (err) {
      result(err, null);
      return;
      } else {
      result(null, res);
      return;
      }
  });
};

module.exports = Users;