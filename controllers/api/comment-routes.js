const router = require("express").Router();

 //get all comments
 router.get("/", (req, res) => {
   res.send("GET ALL COMMENTS");
 });

 //get comment by id
 router.get("/:id", (req, res) => {
   res.send(`GET COMMENT WHERE id is ${req.params.id}`);
 });

 //add comment
 router.post("/", (req, res) => {
   res.send(`ADD COMMENT`);
 });
 //update comment
 router.put("/", (req, res) => {
   res.send(`update comment`);
 });
 //remove comment
 router.delete("/", (req, res) => {
   res.send(`delete comment`);
 });
 module.exports = router;