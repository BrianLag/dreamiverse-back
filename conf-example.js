const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'username', // le nom d'utilisateur
password :  'mot de passe', // le mot de passe
database :  'dreamiverse', // le nom de la base de données
});
module.exports = connection;
