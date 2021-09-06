const express = require("express");
 const path = require("path");

 const controller = require("./controllers");
 //handlebars
 const exphbs = require("express-handlebars");

 //Sequelize
 const sequelize = require("./config/connection");

 //initialize the server
 const app = express();
 const PORT = process.env.PORT || 3001;
 //middlewear
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, "public")));

 app.use("/", controller);

 //set handlebars as render engine
 app.engine("handlebars", exphbs());
 app.set("view engine", "handlebars");


 sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });