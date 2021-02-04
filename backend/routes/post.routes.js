    const express = require('express');
    const router = express.Router();
    const post = require("../controllers/post.controller.js");
  
    // Create un nouveaux post
    router.post("/post/create", post.create);
  
    // Recuperer tout les post
    router.get("/post", post.findAll);
  
    // // Mettre à jour un post 
    // router.put("/post/:usersId", post.modify);
  
    // // suprimer un compte avec son id
    //  router.delete("/post/:usersId", post.delete);
  
     module.exports = router;