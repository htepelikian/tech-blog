const router = require("express").Router();

 //get all the users
 router.get("/", (req, res) => {
   res.send("GET ALL users");
 });

 //get user by id
 router.get("/:id", (req, res) => {
   res.send(`GET user WHERE id is ${req.params.id}`);
 });

 //add user
 router.post("/", (req, res) => {
   res.send(`ADD user`);
 });

 //update user
 router.put("/", (req, res) => {
   res.send(`update user`);
 });
 //update user
 router.delete("/", (req, res) => {
   res.send(`delete user`);
 });
 module.exports = router;