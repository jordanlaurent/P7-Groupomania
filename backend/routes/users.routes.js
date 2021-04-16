    const express = require('express');
    const router = express.Router();
    const users = require("../controllers/users.controller.js");
    const verifyPassword = require('../middleware/verifyPassword');
    const auth = require('../middleware/auth');
    const multer = require('../middleware/multer-config');
  
    // Create un nouveaux compte
    router.post("/signup",verifyPassword, users.signup);

   // mettre a jour photo utilisateur
    router.put("/photo",multer, users.photo) 
    // se connecter
    router.post("/login", users.login);
  
    // Recuperer info user
    router.post("/user", users.findOne);
    // Recuperer tout les  user
    router.get("/users", users.findAll);
    // Mettre à jour un compte avec son id
    router.put("/update", users.update);
  
    // suprimer un compte avec son id
    router.delete("/user/delete", users.delete);

        // Admin suprime un compte avec son id
        router.delete("/user/admin/delete", users.Admindelete);

  module.exports = router;