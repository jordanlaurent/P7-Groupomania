const express = require('express');
const router = express.Router();
const comment = require("../controllers/comment.controller.js");

// Create un nouveaux post
router.post("/comment/create", comment.create);

// // Recuperer tout les post
 router.get("/comment", comment.findAll);

// // // Mettre à jour un post 
router.put("/comment/modify", comment.modify);

// // // suprimer un post avec son id
 router.delete("/comment/delete", comment.delete);

 // // // ADMIN  suprime un commentaire avec son id
 router.delete("/comment/admin/delete", comment.Admindelete);

module.exports = router;