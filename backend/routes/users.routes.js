module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    // Create un nouveaux compte
    app.post("/users/signup", users.signup);

    app.post("/users/login", users.login);
  
    // Recuperer tout les comptes
    app.get("/users", users.findAll);
  
    // Mettre à jour un compte avec son id
    app.put("/users/:usersId", users.update);
  
    // suprimer un compte avec son id
    app.delete("/users/:usersId", users.delete);
  };