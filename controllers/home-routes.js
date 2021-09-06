const router = require("express").Router();

 //home route server homepage
 router.get("/", (req, res) => {
   res.render("home");
 });

 //serve up login page
 router.get("/login", (req, res) => {
    res.render("login");
  });
 
  //serve up dashboard
  router.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });
 

 module.exports = router;