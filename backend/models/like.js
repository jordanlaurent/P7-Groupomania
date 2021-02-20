const sql = require("./db.js");

// constructeur
const Likes = function(likes) {
  this.like = likes.like;
  this.dislike = likes.dislike;
  this.userslike= likes.userslike;
  this.usersdislike= likes.usersdislike;
}