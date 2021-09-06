const router = require("express").Router();

 //get all the posts
 router.get("/", (req, res) => {
   res.send("GET ALL postS");
 });

 //get post by id
 router.get("/:id", (req, res) => {
   res.send(`GET post WHERE id is ${req.params.id}`);
 });

 //add post
 router.post("/", (req, res) => {
   res.send(`ADD post`);
 });
 //update post
 router.put("/", (req, res) => {
   res.send(`update post`);
 });
 //remove post
 router.delete("/", (req, res) => {
   res.send(`delete post`);
 });
 module.exports = router;