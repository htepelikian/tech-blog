const router = require("express").Router();

 //home route server homepage
 router.get("/", (req, res) => {
   res.send("Home page route");
 });

 module.exports = router;