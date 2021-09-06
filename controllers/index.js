const router = require("express").Router();
 const homeRoutes = require("./home-routes");

 //set up the route useage
 router.use("/", homeRoutes);
 module.exports = router;