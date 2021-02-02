module.exports = app => {
    const post = require("../controllers/post.controller.js");
  
    // Create un nouveaux post
    app.post("/post/create", post.create);
  
    // Recuperer tout les post
    app.get("/post", post.findAll);
  
    // Mettre à jour un post avec son id
    app.put("/post/:usersId", post.update);
  
    // suprimer un compte avec son id
    app.delete("/post/:usersId", post.delete);
  };