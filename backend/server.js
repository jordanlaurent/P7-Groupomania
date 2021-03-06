const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();

app.use(cors())

// alyser les requêtes de type de contenu: application / json
app.use(bodyParser.json());

// analyser les requêtes de type de contenu: application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'applications." });
});

const userRoutes = require("./routes/users.routes.js");
app.use(userRoutes);

const postRoutes = require("./routes/post.routes.js");
app.use(postRoutes);
// sport utiliser
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});