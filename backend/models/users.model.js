const sql = require("./db.js");

// constructeur
const Users = function(users) {
  this.email = users.email;
  this.name = users.name;
  this.password = users.password;
  this.active = users.active;
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
Users.update= ([email,password,name, id], result) => {
  sql.query(`UPDATE users SET email = '${email}', password = '${password}',name = '${name}', WHERE userId = '${id}'`, (err, res) => {
    if (err) {
      result(err, null);
      console.log(err);
      return;
      } else { 
      result(null, res);
      console.log(res);
      return;
      }
  });
};
// Suprimer un utilisateur avec son id
Users.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found users with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted users with id: ", id);
    result(null, res);
  });
};

module.exports = Users;