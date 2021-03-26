const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()

  app.options('*', (req, res) => {
    // allowed XHR methods
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PATCH, PUT, POST, DELETE, OPTIONS',
    )
    res.send()
  })
})


app.use(bodyParser.json());

// analyser les requêtes de type de contenu: application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'applications." });
});

const userRoutes = require("./routes/users.routes.js");
app.use(userRoutes);

const commentRoutes = require("./routes/comment.routes.js");
app.use(commentRoutes);

const postRoutes = require("./routes/post.routes.js");
app.use(postRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

// sport utiliser
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});