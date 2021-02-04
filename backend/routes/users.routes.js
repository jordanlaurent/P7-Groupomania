    const express = require('express');
    const router = express.Router();
    const users = require("../controllers/users.controller.js");
    const verifyPassword = require('../middleware/verifyPassword');
  
    // Create un nouveaux compte
    router.post("/signup",verifyPassword, users.signup);

    // se connecter
    router.post("/login", users.login);
  
    // Mettre à jour un compte avec son id
    router.put("/", users.update);
  
    // suprimer un compte avec son id
    router.delete("/:usersId", users.delete);

  module.exports = router;