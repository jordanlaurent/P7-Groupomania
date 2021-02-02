const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Créer une connexion à la base de données
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// ouvrire connexion mysql
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;