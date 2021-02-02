const sql = require("./db.js");

// constructeur
const Post = function(post) {
  this.message = post.message;
};

Post.signup = (newPost, result) => {
  sql.query("INSERT INTO post SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created post: ", { id: res.insertId, ...newPost });
    result(null, { id: res.insertId, ...newPost });
  });
};

Post.findById = (postId, result) => {
  sql.query(`SELECT * FROM post WHERE id = ${postId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found post: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found users with the id
    result({ kind: "not_found" }, null);
  });
};

Post.getAll = result => {
  sql.query("SELECT * FROM post", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("post: ", res);
    result(null, res);
  });
};

Post.updateById = (id, post, result) => {
  sql.query(
    "UPDATE post SET message = ?, WHERE id = ?",
    [post.message, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // pas de compte trouver qui corresponde a l'id
        result({ kind: "non trouver" }, null);
        return;
      }

      console.log("Compte mise a jour: ", { id: id, ...post });
      result(null, { id: id, ...post });
    }
  );
};

Post.remove = (id, result) => {
  sql.query("DELETE FROM post WHERE id = ?", id, (err, res) => {
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

    console.log("deleted post with id: ", id);
    result(null, res);
  });
};

Post.removeAll = result => {
  sql.query("DELETE FROM post", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} post`);
    result(null, res);
  });
};

module.exports = Post;