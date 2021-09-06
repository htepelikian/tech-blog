const router = require("express").Router();

 //home route server homepage
 router.get("/", (req, res) => {
   res.render("home");
 });

 module.exports = router;