const express = require('express');
const router = express.Router();
const comment = require("../controllers/comment.controller.js");

// Create un nouveaux post
router.post("/comment/create", comment.create);

// // Recuperer tout les post
 router.get("/comment", comment.findAll);
// // Chercher un post
// router.get("/comment/search", comment.search);

// // // Mettre à jour un post 
router.put("/post/modify", comment.modify);

// // // suprimer un post avec son id
 router.delete("/comment/delete", comment.delete);

 // // // ADMIN  suprime un commentaire avec son id
 router.delete("/comment/admin/delete", comment.Admindelete);

module.exports = router;