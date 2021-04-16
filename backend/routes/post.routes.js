const express = require('express');
const router = express.Router();
const post = require("../controllers/post.controller.js");
const multer = require('../middleware/multer-config');

// Create un nouveaux post
router.post("/post/create",multer, post.create);

// Recuperer tout les post
router.get("/post", post.findAll);
// Chercher un post
router.get("/post/search", post.search);

// // Mettre à jour un post 
router.put("/post/modify", post.modify);

// // suprimer un post avec son id
router.delete("/post/delete", post.delete);

// // suprimer un post avec son id
router.delete("/post/admin/delete", post.Admindelete);

module.exports = router;