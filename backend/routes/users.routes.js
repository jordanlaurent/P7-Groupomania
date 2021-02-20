    const express = require('express');
    const router = express.Router();
    const users = require("../controllers/users.controller.js");
    const verifyPassword = require('../middleware/verifyPassword');
    const auth = require('../middleware/auth');
  
    // Create un nouveaux compte
    router.post("/signup",verifyPassword, users.signup);

    // se connecter
    router.post("/login", users.login);
  
    // Mettre à jour un compte avec son id
    router.put("/",auth, users.update);
  
    // suprimer un compte avec son id
    router.delete("/user/delete", users.delete);

  module.exports = router;